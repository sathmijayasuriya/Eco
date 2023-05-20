import Button from '@components/Buttons/Button';
import SearchBox from '@components/FormElements/SearchBox';
import Modal from '@components/Other/Modal';
import SingleBarChart from '@components/SingleLineChart';
import Tbl from '@components/Table/Tbl';
import useDebounce from '@hooks/useDebounce';
import AddOffer from '@layouts/Offers/AddOffer';
import { limitOpt, searchOpt, typeOpt } from '@lib/optionLib';
import { Offer } from '@prisma/client';
import { TOfferSchema } from '@schemas/offerSchema';
import { colors } from '@theme/baseTheme';
import { IOptions, TFormState, TInputValue, TOrderBy, TOrderVal, TRoute } from '@ts/common';
import { accumulateByKey, sortBy, sumBy } from '@util/normalize';
import { compareAsc, endOfMonth, format, startOfMonth } from 'date-fns';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { DateRange, DayPicker } from 'react-day-picker';
import toast from 'react-hot-toast';
import { FiPlusCircle, FiTrash2 } from 'react-icons/fi';
import styled from 'styled-components';

type TProps = { rType: TRoute };
function Offers({ rType }: TProps): JSX.Element {
  const [data, setData] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [limit, setLimit] = useState<TInputValue>('8');
  const [modelOpened, setModelOpened] = useState(false);
  const [submitType, setSubmitType] = useState<TFormState>('insert');
  const [searchOption, setSearchOption] = useState('id');
  const [searchVal, setSearchVal] = useState('');
  const debouncedSearchVal = useDebounce(searchVal, 250);
  const initialValues: TOfferSchema = {
    id: null,
    status: 'Active',
    type: null,
    desc: '',
    startDate: new Date(),
    endDate: new Date(),
    offerCode: '',
    discount: 0,
  };
  const [offerInput, setOfferInput] = useState<TOfferSchema>({ ...initialValues });
  const [graphData, setGraphData] = useState<{ name: string; val: number }[]>([]);
  const defaultSelected: DateRange = {
    from: startOfMonth(new Date()),
    to: endOfMonth(new Date()),
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  const [orderBy, setOrderBy] = useState<TOrderBy>({
    key: 'id',
    value: 'asc',
  });
  const router = useRouter();

  const getOfferData = async (nextPage: number, pageLimit: number, orderByVal: TOrderBy) => {
    setLoading(true);
    fetch(`/api/dashboard?page=${nextPage}&limit=${pageLimit}&orderBy=${orderByVal.key}&order=${orderByVal.value}`, {
      method: 'GET',
      headers: {
        authorization: `${process.env.JWT}`,
      },
    })
      .then(res => res.json())
      .then(async res => {
        if (res.error) {
          toast.error(res?.message || 'Something Went Wrong. Try again!');
        } else {
          setData(res.data);
          setPageCount(res.totalPages);
          setCurrentPage(res.page);
          setLimit(res.limit);
          setTotalData(res.total);
          router.push(
            `/dashboard/${rType}?menu=offers&page=${nextPage}&limit=${pageLimit}&orderBy=${orderByVal.key}&order=${orderByVal.value}`,
            undefined,
            { shallow: true }
          );
          if (range?.from && range?.to) {
            getGraph(format(range.from, 'yyyy-MM-dd').toString(), format(range.to, 'yyyy-MM-dd').toString());
          }
        }
        setLoading(false);
      })
      .catch(res => {
        toast.error(res?.message || 'Something Went Wrong. Try again!');
        setLoading(false);
      });
  };
  const getSearchData = async (searchKey: string, searchBy: string) => {
    setLoading(true);
    fetch(`/api/dashboard?searchKey=${searchKey}&searchBy=${searchBy}`, {
      method: 'GET',
      headers: {
        authorization: `${process.env.JWT}`,
      },
    })
      .then(res => res.json())
      .then(async res => {
        if (res.error) {
          toast.error(res?.message || 'Something Went Wrong. Try again!');
        } else {
          setData(res.data);
          setPageCount(res.totalPages);
          setCurrentPage(res.page);
          setLimit(res.limit);
          setTotalData(res.total);
          router.push(
            `/dashboard/${rType}?menu=offers&page=${res.page}&limit=${res.limit}&orderBy=${orderBy.key}&order=${orderBy.value}`,
            undefined,
            { shallow: true }
          );
          if (range?.from && range?.to) {
            getGraph(format(range.from, 'yyyy-MM-dd').toString(), format(range.to, 'yyyy-MM-dd').toString());
          }
        }
        setLoading(false);
      })
      .catch(res => {
        toast.error(res?.message || 'Something Went Wrong. Try again!');
        setLoading(false);
      });
  };

  const getGraph = async (from: string, to: string) => {
    await fetch(`/api/dashboard?start=${from}&end=${to}`, {
      method: 'GET',
      headers: {
        authorization: `${process.env.JWT}`,
      },
    })
      .then(res => res.json())
      .then(res => {
        const temp = res.data as Offer[];
        const temp2 = temp
          .map(val => ({
            name: format(new Date(val.startDate), 'P'),
            val: +val.discount,
            end: format(new Date(val.endDate), 'dd'),
          }))
          .sort((a, b) => compareAsc(new Date(a.name), new Date(b.name)));
        setGraphData(temp2);
      })
      .catch(res => {
        toast.error(res?.message || 'Something Went Wrong. Try again!');
      });
  };

  const deleteOfferData = (id: number) => {
    setLoading(true);
    fetch(`/api/dashboard?type=user_one_delete&id=${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `${process.env.JWT}`,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          setLoading(false);
          toast.error(res?.message || 'Something Went Wrong. Try again!');
        } else {
          toast.success(res.message);
          getOfferData(1, +(limit as string), orderBy); // another call
        }
      })
      .catch(res => {
        toast.error(res?.message || 'Something Went Wrong. Try again!');
        setLoading(false);
      });
  };

  const deleteAll = () => {
    setLoading(true);
    fetch(`/api/dashboard?type=user_all_delete`, {
      method: 'DELETE',
      headers: {
        authorization: `${process.env.JWT}`,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          setLoading(false);
          toast.error(res?.message || 'Something Went Wrong. Try again!');
        } else {
          toast.success(res.message);
          getOfferData(1, +(limit as string), orderBy); // another call
        }
      })
      .catch(res => {
        toast.error(res?.message || 'Something Went Wrong. Try again!');
        setLoading(false);
      });
  };

  const onModalSubmitHandler = (data: TOfferSchema, fState: TFormState) => {
    const rType = fState === 'insert' ? 'POST' : 'PUT';
    const rrType = fState === 'insert' ? 'create' : 'update';
    setLoading(true);
    setModelOpened(false);
    fetch(`/api/dashboard?type=offer_${rrType}`, {
      method: rType,
      headers: {
        'content-type': 'application/json',
        authorization: `${process.env.JWT}`,
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          setLoading(false);
          toast.error(res?.message || 'Something Went Wrong. Try again!');
        } else {
          toast.success(res.message);
          getOfferData(1, +(limit as string), orderBy); // another call
        }
      })
      .catch(res => {
        toast.error(res?.message || 'Something Went Wrong. Try again!');
        setLoading(false);
      });
  };

  const getOrder = (headVal: string) => {
    const change = orderBy.value === 'asc' ? 'desc' : 'asc';
    const odr = orderBy.key === headVal ? change : 'asc';
    const temp = { key: headVal, value: odr as TOrderVal };
    getOfferData(1, +(limit as string), temp);
    setOrderBy(temp);
  };

  const getArrow = (headVal: string): string => {
    if (orderBy.key === headVal) {
      return orderBy.value === 'desc' ? '↑' : '↓';
    }
    return '';
  };

  const getCorrectOpt = (opt: IOptions[], val: string): string | null => {
    const filtered = opt.filter(item => item.value === val) || [];
    if (filtered.length > 0) {
      return filtered[0].label || null;
    }
    return null;
  };

  const headerArr = [
    { align: 'left', priority: 1, minWidth: 50, maxWidth: 300, title: <Heading>#</Heading> },
    {
      align: 'left',
      priority: 2,
      minWidth: 40,
      maxWidth: 300,
      title: <Heading onClick={() => getOrder('id')}>ID{getArrow('id')}</Heading>,
    },
    {
      align: 'left',
      priority: 11,
      minWidth: 100,
      maxWidth: 300,
      title: <Heading onClick={() => getOrder('status')}>STATUS{getArrow('status')}</Heading>,
    },
    {
      align: 'left',
      priority: 10,
      minWidth: 100,
      maxWidth: 300,
      title: <Heading onClick={() => getOrder('type')}>TYPE{getArrow('type')}</Heading>,
    },
    {
      align: 'left',
      priority: 9,
      minWidth: 130,
      maxWidth: 300,
      title: <Heading onClick={() => getOrder('desc')}>DESC{getArrow('desc')}</Heading>,
    },
    {
      align: 'left',
      priority: 8,
      minWidth: 130,
      maxWidth: 300,
      title: <Heading onClick={() => getOrder('startDate')}>START DATE{getArrow('startDate')}</Heading>,
    },
    {
      align: 'left',
      priority: 7,
      minWidth: 120,
      maxWidth: 300,
      title: <Heading onClick={() => getOrder('endDate')}>END DATE{getArrow('endDate')}</Heading>,
    },
    {
      align: 'left',
      priority: 6,
      minWidth: 130,
      maxWidth: 300,
      title: <Heading onClick={() => getOrder('offerCode')}>OFFER CODE{getArrow('offerCode')}</Heading>,
    },
    {
      align: 'left',
      priority: 4,
      minWidth: 100,
      maxWidth: 300,
      title: <Heading onClick={() => getOrder('discount')}>DISCOUNT{getArrow('discount')}</Heading>,
    },
    {
      align: 'left',
      priority: 5,
      minWidth: 140,
      maxWidth: 300,
      title: <Heading onClick={() => getOrder('createdAt')}>CREATED AT{getArrow('createdAt')}</Heading>,
    },
    {
      align: 'left',
      priority: 5,
      minWidth: 140,
      maxWidth: 300,
      title: <Heading onClick={() => getOrder('updatedAt')}>UPDATED AT{getArrow('updatedAt')}</Heading>,
    },
    {
      align: 'left',
      priority: 3,
      minWidth: 120,
      maxWidth: 300,
      title: <Heading>ACTION</Heading>,
    },
  ];

  const skuDataRows = data.map((item, i) => [
    <div key={`data-row-${i + 1}-hash`}>
      <ItemNumber>{i + 1}</ItemNumber>
    </div>,
    <div key={`data-row-${i + 1}-id`}>{item.id}</div>,
    <div key={`data-row-${i + 1}-status`}>
      {item.status === 'Active' ? <Active>Active</Active> : <InActive>InActive</InActive>}
    </div>,
    <div key={`data-row-${i + 1}-type`}>{getCorrectOpt(typeOpt, item.type)}</div>,
    <div key={`data-row-${i + 1}-desc`}>{item.desc}</div>,
    <div key={`data-row-${i + 1}-startDate`}>{format(new Date(item.startDate), 'dd-MMMM-yyyy')}</div>,
    <div key={`data-row-${i + 1}-endDate`}>{format(new Date(item.endDate), 'dd-MMMM-yyyy')}</div>,
    <div key={`data-row-${i + 1}-offerCode`}>{item.offerCode}</div>,
    <div key={`data-row-${i + 1}-discount`}>{`${item.discount}`}</div>,
    <div key={`data-row-${i + 1}-createdAt`}>{format(new Date(item.createdAt), 'dd-MMMM-yyyy HH:mm')}</div>,
    <div key={`data-row-${i + 1}-updatedAt`}>{format(new Date(item.updatedAt), 'dd-MMMM-yyyy HH:mm')}</div>,
    <div key={`data-row-${i + 1}-action`}>
      <div className='buttonCover'>
        <Button
          type='normal'
          isDisabled={false}
          text='Delete'
          onClickHandler={async () => {
            deleteOfferData(+item.id);
          }}
        />
        <Button
          type='normal'
          isDisabled={false}
          text='Edit'
          onClickHandler={async () => {
            setSubmitType('edit');
            setOfferInput({
              id: +item.id,
              status: item.status,
              type: item.type,
              desc: item.desc,
              startDate: new Date(item.startDate),
              endDate: new Date(item.endDate),
              offerCode: item.offerCode,
              discount: +item.discount,
            });
            setModelOpened(true);
          }}
        />
      </div>
    </div>,
  ]);

  const sortedByHPriorityArr = sortBy(headerArr, 'priority');
  const accumulatedSortedArr = accumulateByKey(sortedByHPriorityArr, 'minWidth');
  const accumulatedMaxSum = sumBy(headerArr, 'maxWidth');

  useEffect(() => {
    async function fetchData() {
      const temp = debouncedSearchVal as string;
      if (temp.trim().length > 0) {
        getSearchData(temp, searchOption);
      } else {
        const tempLimit = +(limit as string) >= 1000 ? 8 : +(limit as string);
        await getOfferData(1, tempLimit, orderBy);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchVal]);

  return (
    <Container>
      <TopArea>
        <BtnCtr>
          <TotalData>Total Data: {totalData}</TotalData>
          <BlackBtn
            onClick={() => {
              setSubmitType('insert');
              setModelOpened(true);
            }}
          >
            Add Offer <FiPlusCircle />
          </BlackBtn>
          <ClearAll onClick={() => deleteAll()}>
            Clear All <FiTrash2 />
          </ClearAll>
          <SearchBox
            searchVal={searchVal}
            setSearchVal={setSearchVal}
            options={searchOpt}
            value={searchOption}
            setValue={val => setSearchOption(val)}
          />
        </BtnCtr>
        <ChartCtr>
          <SingleBarChart data={graphData} />
        </ChartCtr>
        <DateCtr>
          <DayPicker
            footer={
              range?.from && range?.to ? (
                <DateFooter
                  onClick={() => {
                    if (range?.from && range?.to) {
                      getGraph(format(range.from, 'yyyy-MM-dd').toString(), format(range.to, 'yyyy-MM-dd').toString());
                    }
                  }}
                >
                  from {format(range.from, 'yyyy-MM-dd')} to {format(range.to, 'yyyy-MM-dd')}
                </DateFooter>
              ) : (
                <DateFooter>Select Data Range</DateFooter>
              )
            }
            mode='range'
            defaultMonth={new Date()}
            selected={range}
            onSelect={setRange}
          />
        </DateCtr>
      </TopArea>

      <TableCtr>
        <Tbl
          name='offers'
          headerArr={headerArr}
          dataArr={skuDataRows as unknown as JSX.Element[][]}
          accumulatedSortedArr={accumulatedSortedArr}
          accumulatedMaxSum={accumulatedMaxSum}
          currentPage={currentPage}
          pageCount={pageCount}
          onPageChange={nextPage => {
            getOfferData(nextPage, +(limit as string), orderBy);
          }}
          limit={limit}
          setLimit={item => {
            getOfferData(1, +(item || 8), orderBy);
          }}
          options={limitOpt}
          loading={loading}
        />
      </TableCtr>
      <Modal
        onClickOutside={() => {
          setModelOpened(false);
          setOfferInput({ ...initialValues });
        }}
        modalOpen={modelOpened}
      >
        <AddOffer onModalSubmitHandler={onModalSubmitHandler} initialData={offerInput} formState={submitType} />
      </Modal>
    </Container>
  );
}

export default Offers;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  width: 100%;
  position: relative;

  .loaderCtr {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loaderCtrFull {
    width: 100%;
    height: calc(100vh - 40px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .LinkWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TableCtr = styled.div`
  margin: 10px 0;
  .link {
    text-decoration: underline;
    user-select: text !important;
  }
`;

const Heading = styled.div`
  cursor: pointer;
  font-weight: 900;
`;

const TopArea = styled.div`
  display: flex;
`;

const BlackBtn = styled.div`
  font-weight: bolder;
  text-transform: uppercase;
  background: #000;
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  width: 200px;
`;

const ClearAll = styled.div`
  font-weight: bolder;
  text-transform: uppercase;
  background: #000;
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  width: 200px;
`;

const BtnCtr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

const Active = styled.div`
  background: ${colors.green9};
  color: ${colors.white};
  padding: 0.1rem 1rem;
  border-radius: 20px;
`;

const InActive = styled.div`
  background: ${colors.red9};
  color: ${colors.white};
  padding: 0.1rem 1rem;
  border-radius: 20px;
`;

const ItemNumber = styled.div`
  background: ${colors.black};
  color: ${colors.white};
  width: 30px;
  height: 100%;
  border-radius: 0 20px 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChartCtr = styled.div`
  flex: auto;
  align-self: stretch;
`;

const DateCtr = styled.div`
  border: 1px solid ${colors.black};
  border-radius: 4px;
`;

const DateFooter = styled.div`
  background: ${colors.red9};
  color: ${colors.white};
  display: flex;
  font-weight: 900;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 4px;
  margin-top: 10px;
  cursor: pointer;
`;

const TotalData = styled.div`
  width: 100%;
  padding: 20px 0;
  border: 1px solid #000;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 8px solid #000;
  text-transform: uppercase;
  background: ${colors.blue5};
  color: ${colors.white};
  font-weight: bolder;
`;
