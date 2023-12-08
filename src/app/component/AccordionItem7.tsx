import React from 'react';
import { useState } from 'react';
import { Accordion, Button, Card, Modal, Table } from 'react-bootstrap';


interface CarInfoTableProps {
    data: { 
        name: string,
        contact: string,
        securitynum: string,
        email: string,
        otherinfo: string,
        carnum: string,
        carname: string,
        carinfoyear: string,
        carmileage: string,
        dateprsnt: string,
        caridnumber: string,
        offerprice: string,
        acqsttax: string,
        categoryprsnt: string,
        dealer: string,
        depositprsnt: string,
        evidence: string,
        memo: string
    }
}

const CarInfoTable: React.FC<CarInfoTableProps> = (props) => {

    const { name, contact, securitynum, email, otherinfo, carnum, carname, carinfoyear, carmileage, dateprsnt, caridnumber, offerprice, acqsttax, categoryprsnt, dealer, depositprsnt, evidence, memo  } = props.data;

    const [show, setShow] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDetailsClick = () => {
        setShowDetails(!showDetails);
    };

    return (
        <Accordion.Body>
            <p className='fs-5 fw-bolder'>- 판매 종합 집계</p>
            <Table className="text-center">
                <tbody className='align-middle'>
                    {/* header */}
                    <tr className='align-middle'>
                        <th rowSpan={2} className='w-10 bg-fda fw-bolder'>항목</th>
                        <td colSpan={5} className='bg-fda fw-bolder'>판매 손익</td>
                        <td colSpan={4} className='bg-bf7 fw-bolder'>정산</td>
                        <td rowSpan={2} className='bg-ddd fw-bolder'>비고</td>
                    </tr>
                    <tr>
                        <th className='bg-9b2 w-6'>날짜</th>
                        <td className='bg-9b2 fw-bolder'>합계금액</td>
                        <td className='bg-9b2 fw-bolder'>공급가</td>
                        <td className='bg-9b2 fw-bolder'>부가세</td>
                        <td className='bg-9b2 fw-bolder'>증빙</td>
                        <td className='bg-2e6 fw-bolder'>입금</td>
                        <td className='bg-2e6 fw-bolder'>재고금융</td>
                        <td className='bg-2e6 fw-bolder'>이자</td>
                        <td className='bg-2e6 fw-bolder'>미정산</td>
                    </tr>
                    {/* body */}
                    <tr>
                        <th className='bg-bad fw-bolder'>차량매도</th>
                        <td className='bg-bad fw-bolder'></td>
                        <td className='bg-bad fw-bolder'>35,000,000</td>
                        <td className='bg-bad fw-bolder'>31,818,182</td>
                        <td className='bg-bad fw-bolder'>3,181,818</td>
                        <td className='bg-bad fw-bolder'>세계</td>
                        <td className='bg-bad fw-bolder'></td>
                        <td className='bg-bad fw-bolder'></td>
                        <td className='bg-bad fw-bolder'></td>
                        <td className='bg-bad fw-bolder'></td>
                        <td className='bg-bad fw-bolder'></td>
                    </tr>
                    <tr>
                        <th className='bg-ddd fw-bolder'>매입합계</th>
                        <td className='bg-ddd fw-bolder'></td>
                        <td className='bg-ddd fw-bolder'>30,415,000</td>
                        <td className='bg-ddd fw-bolder'>27,272,728</td>
                        <td className='bg-ddd fw-bolder'>2,727,272</td>
                        <td className='bg-ddd fw-bolder'></td>
                        <td className='bg-ddd fw-bolder'></td>
                        <td className='bg-ddd fw-bolder'></td>
                        <td className='bg-ddd fw-bolder'></td>
                        <td className='bg-ddd fw-bolder'></td>
                        <td className='bg-ddd fw-bolder'></td>
                    </tr>
                    <tr>
                        <th>제시금액</th>
                        <td></td>
                        <td>30,000,000</td>
                        <td>27,272,728</td>
                        <td>2,727,272</td>
                        <td>세계</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>취득세</th>
                        <td></td>
                        <td>315,000</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>매입비</th>
                        <td></td>
                        <td>100,000</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th className='bg-ddd fw-bolder'>상품화 합계</th>
                        <td className='bg-ddd fw-bolder'></td>
                        <td className='bg-ddd fw-bolder'>456,400</td>
                        <td className='bg-ddd fw-bolder'>0</td>
                        <td className='bg-ddd fw-bolder'>0</td>
                        <td className='bg-ddd fw-bolder'></td>
                        <td className='bg-ddd fw-bolder'></td>
                        <td className='bg-ddd fw-bolder'></td>
                        <td className='bg-ddd fw-bolder'></td>
                        <td className='bg-ddd fw-bolder'></td>
                        <td className='bg-ddd fw-bolder'></td>
                    </tr>
                    <tr>
                        <th>기타비용</th>
                        <td>23.11.14</td>
                        <td>456,400</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>(주)피알앤디컴퍼니</td>
                    </tr>
                    <tr>
                        <th className='bg-ddd fw-bolder'>알선수수료</th>
                        <td className='bg-ddd fw-bolder'></td>
                        <td className='bg-ddd fw-bolder'>737,000</td>
                        <td className='bg-ddd fw-bolder'>670,000</td>
                        <td className='bg-ddd fw-bolder'>67,000</td>
                        <td className='bg-ddd fw-bolder'></td>
                        <td className='bg-ddd fw-bolder'>165,000</td>
                        <td className='bg-ddd fw-bolder'>572,000</td>
                        <td className='bg-ddd fw-bolder'>290,000</td>
                        <td className='bg-ddd fw-bolder'></td>
                        <td className='bg-ddd fw-bolder'></td>
                    </tr>
                    <tr>
                        <th>알선수수료</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>무증빙</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>9,670,000</td>
                        <td>알선 딜러 수수료</td>
                    </tr>
                    <tr>
                        <th>알선소득세</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>무증빙</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>9,670,000</td>
                        <td>알선 사업소득</td>
                    </tr>
                    <tr>
                        <th className='bg-black text-white'>알선수수료</th>
                        <td className='bg-black text-white'></td>
                        <td className='bg-black text-white'>737,000</td>
                        <td className='bg-black text-white'>670,000</td>
                        <td className='bg-black text-white'>67,000</td>
                        <td className='bg-black text-white'></td>
                        <td className='bg-black text-white'>165,000</td>
                        <td className='bg-black text-white'>572,000</td>
                        <td className='bg-black text-white'>290,000</td>
                        <td className='bg-black text-white'></td>
                        <td className='bg-black text-white'></td>
                    </tr>
                </tbody>
            </Table>

            <p className='fs-5 fw-bolder mt-5'>- 재고금융 정산</p>
            <Table className="text-center">
                <tbody className='align-middle'>
                    {/* header */}
                    <tr className='align-middle'>
                        <th className='w-10 bg-f50 text-white'>구분</th>
                        <th className='bg-f50 text-white'>대출신청일</th>
                        <th className='bg-f50 text-white'>재고금융액</th>
                        <th className='bg-f50 text-white'>기간</th>
                        <th className='bg-ddd'>딜러이자율</th>
                        <th className='bg-ddd'>딜러부담이자</th>
                        <th className='bg-ddd'>딜러입금액</th>
                        <th className='bg-ddd'>딜러미지급액</th>
                    </tr>
                    {/* body */}
                    <tr>
                        <th>제시재고</th>
                        <td>2023-01-01</td>
                        <td>110,000,000</td>
                        <td>6개월</td>
                        <td>5.5%</td>
                        <td>5,500,000</td>
                        <td>3,000,000</td>
                        <td>2,500,000</td>
                    </tr>
                    <tr>
                        <th>의무보험료</th>
                        <td>2023-01-01</td>
                        <td>1,000,000</td>
                        <td>3개월</td>
                        <td>3%</td>
                        <td>30,000</td>
                        <td>0</td>
                        <td>30,000</td>
                    </tr>
                    <tr>
                        <th className='bg-959 text-white'>합계</th>
                        <td className='bg-959 text-white'></td>
                        <td className='bg-959 text-white'>101,000,000</td>
                        <td className='bg-959 text-white'></td>
                        <td className='bg-959 text-white'></td>
                        <td className='bg-959 text-white'>5,530,000</td>
                        <td className='bg-959 text-white'>3,000,000</td>
                        <td className='bg-959 text-white'>2,532,000</td>
                    </tr>
                </tbody>
            </Table>

            <div className='d-flex justify-content-between text-end mb-2 mt-5'>
                <p className='mb-0 fs-5 fw-bolder'>- 딜러 지급액정산</p>
                <div className='d-flex'>
                    <Button variant="primary" className='me-1 fw-bolder'>정산서 인쇄</Button>
                    <Button variant="primary" className='fw-bolder' onClick={handleShow}>정산서 전달</Button>
                </div>
            </div>
            <Table striped>
                <tbody className='align-middle'>
                    {/* header */}
                    <tr className='align-middle'>
                        <th colSpan={7} className='bg-959 text-white fw-bolder'>정산 항목</th>
                        <td className='bg-959 text-white fw-bolder text-center'>금액</td>
                    </tr>
                    {/* body */}
                    <tr>
                        <td colSpan={7}>자동차 판매액</td>
                        <td className='text-end border-start'>35,000,000</td>
                    </tr>
                    <tr>
                        <td colSpan={7}>부가세</td>
                        <td className='text-end border-start'>413,055</td>
                    </tr>
                    <tr>
                        <td colSpan={7}>딜러 소득세 = (차량판매이익-이자부담액)*3.3%</td>
                        <td className='text-end border-start'>47,977</td>
                    </tr>
                    <tr>
                        <td colSpan={7}>매입비(초기 미지급시)</td>
                        <td className='text-end border-start'>100,000</td>
                    </tr>
                    <tr>
                        <td colSpan={7}>취득세(초기 미지급시)</td>
                        <td className='text-end border-start'>315,000</td>
                    </tr>
                    <tr>
                        <td colSpan={7}>재고금융합계</td>
                        <td className='text-end border-start'>30,000,000</td>
                    </tr>
                    <tr>
                        <td colSpan={7}>재고금융 미납이자(선입금분 제외)</td>
                        <td className='text-end border-start'></td>
                    </tr>
                    <tr>
                        <td colSpan={7}>알선 수수료</td>
                        <td className='text-end border-start'>2,600,000</td>
                    </tr>
                    <tr>
                        <td colSpan={7}>알선 소득세(상사 매출인경우는 제외)</td>
                        <td className='text-end border-start'>2,363,636</td>
                    </tr>
                    <tr>
                        <td colSpan={7}>딜러 선입금액</td>
                        <td className='text-end border-start'></td>
                    </tr>
                    <tr>
                        <td colSpan={7} className="bg-bad">딜러 지급액</td>
                        <td className="bg-bad text-end border-start">32,213,245</td>
                    </tr>
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body className='m-3'>
                    <p className='mb-1 m-4 fs-5 fw-bolder'>G70(153나7166)의 <br /> 최종 정산내역을 보내드립니다.</p>
                    <Card className='mt-4 m-4 bg-3a8'>
                        <Card.Body>
                            <p className='text-white fs-5'>최종 지급액</p>
                            <p className='text-end fw-bolder fs-3 text-white'>7,307,680원</p>
                            <p className='mb-0 text-end text-white'>국민 23516842165421</p>
                        </Card.Body>
                    </Card>
                    <Table striped>
                        <tbody className='align-middle'>
                            {/* header */}
                            <tr className='align-middle'>
                                <th colSpan={7} className='bg-959 text-white fw-bolder'>정산 항목</th>
                                <td className='bg-959 text-white fw-bolder text-center'>금액</td>
                            </tr>
                            {/* body */}
                            <tr>
                                <td colSpan={7}>자동차 판매액</td>
                                <td className='text-end border-start fw-bolder text-primary'>35,000,000</td>
                            </tr>
                            <tr>
                                <td colSpan={7}>부가세</td>
                                <td className='text-end border-start fw-bolder text-danger'>413,055</td>
                            </tr>
                            {showDetails && (
                                <tr>
                                    <td colSpan={8} className="p-0">
                                        <Card className='rounded-0 bg-ddd'>
                                            <Card.Body>
                                                <div className='d-flex justify-content-between fw-bolder'>
                                                    <p>부가세</p>
                                                    <p>413,055</p> 
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td colSpan={7}>딜러 소득세 = (차량판매이익-이자부담액)*3.3%</td>
                                <td className='text-end border-start fw-bolder text-danger'>47,977</td>
                            </tr>
                            {showDetails && (
                                <tr>
                                    <td colSpan={8} className="p-0">
                                        <Card className='rounded-0 bg-ddd'>
                                            <Card.Body>
                                                <div className='d-flex justify-content-between fw-bolder'>
                                                    <p>부가세</p>
                                                    <p>413,055</p> 
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td colSpan={7}>매입비(초기 미지급시)</td>
                                <td className='text-end border-start fw-bolder text-danger'>100,000</td>
                            </tr>
                            <tr>
                                <td colSpan={7}>취득세(초기 미지급시)</td>
                                <td className='text-end border-start fw-bolder text-danger'>315,000</td>
                            </tr>
                            <tr>
                                <td colSpan={7}>재고금융합계</td>
                                <td className='text-end border-start fw-bolder text-danger'>30,000,000</td>
                            </tr>
                            {showDetails && (
                                <tr>
                                    <td colSpan={8} className="p-0">
                                        <Card className='rounded-0 bg-ddd'>
                                            <Card.Body>
                                                <div className='d-flex justify-content-between fw-bolder'>
                                                    <p>부가세</p>
                                                    <p>413,055</p> 
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td colSpan={7}>재고금융 미납이자(선입금분 제외)</td>
                                <td className='text-end border-start fw-bolder text-danger'></td>
                            </tr>
                            {showDetails && (
                                <tr>
                                    <td colSpan={8} className="p-0">
                                        <Card className='rounded-0 bg-ddd'>
                                            <Card.Body>
                                                <div className='d-flex justify-content-between fw-bolder'>
                                                    <p>부가세</p>
                                                    <p>413,055</p> 
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td colSpan={7}>알선 수수료</td>
                                <td className='text-end border-start fw-bolder text-danger'>2,600,000</td>
                            </tr>
                            <tr>
                                <td colSpan={7}>알선 소득세(상사 매출인경우는 제외)</td>
                                <td className='text-end border-start fw-bolder text-danger'>2,363,636</td>
                            </tr>
                            <tr>
                                <td colSpan={7}>딜러 선입금액</td>
                                <td className='text-end border-start fw-bolder text-danger'></td>
                            </tr>
                            {showDetails && (
                                <tr>
                                    <td colSpan={8} className="p-0">
                                        <Card className='rounded-0 bg-ddd'>
                                            <Card.Body>
                                                <div className='d-flex justify-content-between fw-bolder'>
                                                    <p>부가세</p>
                                                    <p>413,055</p> 
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td colSpan={7} className="bg-bad">딜러 지급액</td>
                                <td className="bg-bad text-end border-start fw-bolder text-danger">32,213,245</td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
                <Button variant="primary" className='w-95 m-3' onClick={handleDetailsClick}>
                    {showDetails ? '상세내역 감추기' : '상세내역 보기'}
                </Button>
            </Modal>
        </Accordion.Body>
    );
}

export default CarInfoTable;
