import React from 'react';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Accordion.Body>
            <Table className="text-center">
                <tbody>
                    <tr className='align-middle'>
                        <th className='border border-white bg-f50 text-white col-1'>구분</th>
                        <th className='border border-white bg-f50 text-white w-10'>대출신청일</th>
                        <th className='border border-white bg-f50 text-white w-10'>최초입금일</th>
                        <th className='border border-white bg-f50 text-white w-10'>재고금융액</th>
                        <th className='border border-white bg-f50 text-white w-5'>기간</th>
                        <th className='border border-white bg-bad w-10'>딜러이자율</th>
                        <th className='border border-white bg-bad w-10'>딜러 <br /> 부담이자</th>
                        <th className='border border-white bg-2e6 col-1'>대출업체</th>
                        <th className='border border-white bg-2e6 w-6'>업체 <br /> 이자율</th>
                        <th className='border border-white bg-2e6 col-1'>업체 <br /> 부담이자</th>
                        <th className='border border-white bg-f50 text-white col-1'>상사 <br /> 이자손익</th>
                    </tr>
                    <tr>
                        <td colSpan={12} className="border-0 p-0">
                            <Accordion flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className='accordion-active-bg-none'>
                                        <Table className="text-center mb-0">
                                            <thead>
                                                <tr className='align-middle'>
                                                    <th className='col-1 px-0'>제시재고</th>
                                                    <th className='w-10 px-0'>2023-12-06</th>
                                                    <th className='w-10 px-0'>2023-12-25</th>
                                                    <th className='w-10 px-0'>30,000,000</th>
                                                    <th className='w-5 px-0'>3개월</th>
                                                    <th className='w-10 px-0'>10%</th>
                                                    <th className='w-10 px-0'></th>
                                                    <th className='col-1 px-0'>현대캐피탈</th>
                                                    <th className='w-6 px-0'>8%</th>
                                                    <th className='col-1 px-0'></th>
                                                    <th className='col-1 px-0'></th>
                                                </tr>
                                            </thead>
                                        </Table>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className='text-end mb-2'>
                                            <Button variant="primary">수정</Button>{' '}
                                            <Button variant="danger">삭제</Button>{' '}
                                        </div>
                                        <Table className="text-center">
                                            <thead>
                                                <tr>
                                                    <th className='border border-white bg-f50 text-white'>회차</th>
                                                    <th className='border border-white bg-f50 text-white'>이자납입일</th>
                                                    <th className='border border-white bg-f50 text-white'>딜러 이자</th>
                                                    <th className='border border-white bg-f50 text-white'>캐피탈 이자</th>
                                                    <th className='border border-white bg-f50 text-white'>총 납입이자</th>
                                                    <th className='border border-white bg-f50 text-white'>딜러 입금액</th>
                                                </tr>
                                            </thead>
                                            <tbody className='align-middle'>
                                                <tr>
                                                    <td>1회</td>
                                                    <td>2023-45-25</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Accordion.Body>
                                </Accordion.Item>
                                {/* <Accordion.Item eventKey="1">
                                    <Accordion.Header className='accordion-active-bg-none'>
                                        <Table className="text-center mb-0">
                                            <thead>
                                                <tr className='align-middle'>
                                                    <th className='col-1 px-0'>제시재고</th>
                                                    <th className='w-10 px-0'>2023-01-01</th>
                                                    <th className='w-10 px-0'>2023-01-25</th>
                                                    <th className='w-10 px-0'>100,000,000</th>
                                                    <th className='w-5 px-0'>6개월</th>
                                                    <th className='w-10 px-0'>5.5%</th>
                                                    <th className='w-10 px-0'>5,500,000</th>
                                                    <th className='col-1 px-0'>NH캐피털</th>
                                                    <th className='w-6 px-0'>3%</th>
                                                    <th className='col-1 px-0'>3,000,000</th>
                                                    <th className='col-1 px-0'>2,500,000</th>
                                                </tr>
                                            </thead>
                                        </Table>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className='text-end mb-2'>
                                            5월 21일 매도처리 되었습니다.
                                        </div>
                                        <Table className="text-center">
                                            <thead>
                                                <tr>
                                                    <th className='border border-white bg-f50 text-white'>회차</th>
                                                    <th className='border border-white bg-f50 text-white'>이자납입일</th>
                                                    <th className='border border-white bg-f50 text-white'>딜러 이자</th>
                                                    <th className='border border-white bg-f50 text-white'>캐피탈 이자</th>
                                                    <th className='border border-white bg-f50 text-white'>총 납입이자</th>
                                                    <th className='border border-white bg-f50 text-white'>딜러 입금액</th>
                                                </tr>
                                            </thead>
                                            <tbody className='align-middle'>
                                                <tr>
                                                    <td>2회</td>
                                                    <td>2023-01-25</td>
                                                    <td>1,250,000원</td>
                                                    <td>410,000</td>
                                                    <td>1,660,000</td>
                                                    <td>1,660,000</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Accordion.Body>
                                </Accordion.Item> */}
                            </Accordion>
                        </td>
                    </tr>
                    <tr className='align-middle'>
                        <td className='border border-white fw-bolder bg-ddd col-1'>합계</td>
                        <td className='border border-white fw-bolder bg-ddd w-10'></td>
                        <td className='border border-white fw-bolder bg-ddd w-10'></td>
                        <td className='border border-white fw-bolder bg-ddd w-10'>30,000,000</td>
                        <td className='border border-white fw-bolder bg-ddd w-5'>3개월</td>
                        <td className='border border-white fw-bolder bg-ddd w-10'></td>
                        <td className='border border-white fw-bolder bg-ddd w-10'></td>
                        <td className='border border-white fw-bolder bg-ddd col-1'></td>
                        <td className='border border-white fw-bolder bg-ddd w-6'></td>
                        <td className='border border-white fw-bolder bg-ddd col-1'></td>
                        <td className='border border-white fw-bolder bg-ddd col-1'></td>
                    </tr>
                </tbody>
            </Table>
            <Button size="lg" className='w-100 my-3 bg-ddd text-primary border-0'>
                <p className='m-0 fs-6 fw-bolder'>+ 재고금융 수기등록</p>
            </Button>
            <Button variant="primary" size="lg" className='w-100 my-3' onClick={handleShow}>
                <p className='m-0 fs-5 fw-bolder'>매도처리</p>
            </Button>

            
            <Modal show={show} onHide={handleClose} className="mx-700">
                <Modal.Header closeButton className='bg-ddd'>
                    <Modal.Title className='fs-5 fw-bolder'>매도정보 등록</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="selldate">
                            <Form.Label column sm="2">
                                매도일
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="date"/>
                            </Col>
                            <Col sm="5">
                                재고기간은 xx일 입니다.
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="sellname">
                            <Form.Label column sm="2">
                                이름
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" placeholder="입력하세요" />
                            </Col>
                            <Col sm="5">
                                판매자 이름를 입력합니다.
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="sellcontact">
                            <Form.Label column sm="2">
                                연락처
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" placeholder="입력하세요" />
                            </Col>
                            <Col sm="5">
                                판매자 HP번호를 입력합니다.
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="saleprice">
                            <Form.Label column sm="2">
                                매도금액
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" placeholder="입력하세요" />
                            </Col>
                            <Col sm="5">
                                <Form.Check
                                    required
                                    label="비사업사실용 확인서"
                                    feedback="제출하기 전에 동의해야 합니다."
                                    feedbackType="invalid"
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="sellingcost">
                            <Form.Label column sm="2">
                                매도비
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" placeholder="입력하세요" />
                            </Col>
                            <Col sm="5">
                                매도비는 정산에서는 제외합니다.    
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="sellproofprchs">
                            <Form.Label column sm="2">
                                구매증빙
                            </Form.Label>
                            <Col sm="10">
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`}>
                                        <Form.Check
                                            inline
                                            checked
                                            label="세금계산서"
                                            name="proofprchs"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="카드"
                                            name="proofprchs"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            label="현금영수증"
                                            name="proofprchs"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            label="무증빙"
                                            name="proofprchs"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                    </div>
                                ))}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="sellmemo">
                            <Form.Label column sm="2">
                                메모
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="입력하세요" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        취소
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        매도
                    </Button>
                </Modal.Footer>
            </Modal>
        </Accordion.Body>

    );
}

export default CarInfoTable;
