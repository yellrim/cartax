import React from 'react';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
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
    
    const [inputs, setInputs] = useState({
        name1: '',
        name2: '',
        name3: '',
        name4: '',
        name5: '',
        name6: '',
    });

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    // const [show4, setShow4] = useState(false);
    const [modalTitle, setModalTitle] = useState('');

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const handleClose3 = () => setShow3(false);
    // const handleClose4 = () => setShow4(false);

    const handleShow = (title:string) => {
        setModalTitle(title);
        setShow(true);
    };
    const handleShow2 = () => setShow2(true);
    const handleShow3 = () => {
        setShow3(true);
        setShow2(false);
    }

    const handleInputClick = (field: string, value: string) => {
        setInputs({ ...inputs, [field]: value });
    };

    return (
        <Accordion.Body>
            <div className='text-end mb-2'>
                <Button variant="primary">수정</Button>{' '}
            </div>
            <div className='d-flex'>
                <div className='col-6'>
                    <Table bordered hover>
                        <tbody className='align-middle'>
                        <tr>
                            <th className='bg-ddd'>제시일자</th>
                            <td>{dateprsnt}</td>
                        </tr>
                        <tr>
                            <th className='bg-ddd'>제시구분</th>
                            <td>{categoryprsnt}</td>
                        </tr>
                        <tr>
                            <th className='bg-ddd'>제시금액</th>
                            <td className='text-end'>33,000,000</td>
                        </tr>
                        <tr>
                            <th className='bg-ddd'>공급가</th>
                            <td className='text-end'>30,000,000</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
                <div className='col-6'>
                    <Table bordered hover>
                        <tbody className='align-middle'>
                        <tr>
                            <th className='bg-ddd'>형식년도</th>
                            <td>2001년</td>
                        </tr>
                        <tr>
                            <th className='bg-ddd'>딜러 입금</th>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th className='bg-ddd'>재활용폐자원여부</th>
                            <td className='text-center'>N</td>
                        </tr>
                        <tr>
                            <th className='bg-ddd'>부가세</th>
                            <td className='text-end'>3,000,000</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <Table className="text-center">
                <thead>
                    <tr>
                        <th className='bg-ddd'>구분</th>
                        <th className='bg-ddd'>청구금액</th>
                        <th className='bg-ddd'>입금자</th>
                        <th className='bg-ddd'>입금일자</th>
                        <th className='bg-ddd'>세금신고</th>
                        <th className='bg-ddd'>증빙</th>
                        <th className='bg-ddd'></th>
                    </tr>
                </thead>
                <tbody className='align-middle'>
                    <tr>
                        <td>매입금액</td>
                        <td>33,000,000</td>
                        <td>딜러</td>
                        <td>2023-11-30</td>
                        <td>Y</td>
                        <td><Button variant="primary" className='rounded-pill btn-jeungbing'>세계</Button>{' '}</td>
                        <td>
                            <Button variant="primary" className='rounded-pill btn-jeungbing' onClick={() => handleShow('제시(잔액)')}>수정</Button>{' '}
                            <Button variant="primary" className='rounded-pill btn-jeungbing' onClick={() => handleShow2()}>재고금융 이용</Button>{' '}
                        </td>
                    </tr>
                    <tr>
                        <td>매입비용</td>
                        <td>100,000</td>
                        <td>상사</td>
                        <td>2023-11-30</td>
                        <td>Y</td>
                        <td></td>
                        <td>
                            <Button variant="primary" className='rounded-pill btn-jeungbing' onClick={() => handleShow('매입비용')}>수정</Button>{' '}
                            <Button variant="primary" className='rounded-pill btn-jeungbing' onClick={() => handleShow2()}>재고금융 이용</Button>{' '}
                        </td>
                    </tr>
                    {/* <tr>
                        <td>취득세</td>
                        <td>7,000,000</td>
                        <td>상사</td>
                        <td>2023-11-30</td>
                        <td>Y</td>
                        <td><Button variant="secondary" className='rounded-pill btn-jeungbing bg-ddd border-ddd'>현영</Button>{' '}</td>
                        <td>
                            <Button variant="primary" className='rounded-pill btn-jeungbing' onClick={() => handleShow('취득세')}>수정</Button>{' '}
                            <Button variant="primary" className='rounded-pill btn-jeungbing' onClick={() => handleShow2()}>재고금융 이용</Button>{' '}
                        </td>
                    </tr> */}
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='bg-ddd'>
                    <Modal.Title className='fs-5 fw-bolder'>{modalTitle} 등록</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="carinfocategory">
                            <Form.Label column sm="2" className='fw-bolder'>
                                구분
                            </Form.Label>
                            <Col sm="10">
                                <Form.Select disabled>
                                    <option >{modalTitle}</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="carinfoamount">
                            <Form.Label column sm="2" className='fw-bolder'>
                                금액
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="입력하세요" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="deposit">
                            <Form.Label column sm="2" className='fw-bolder'>
                                입금자
                            </Form.Label>
                            <Col sm="10">
                                <Form.Check
                                    inline
                                    label="딜러"
                                    name="deposit"
                                    type="radio"
                                    id={`inline-radio-1`}
                                />
                                <Form.Check
                                    inline
                                    label="상사"
                                    name="deposit"
                                    type="radio"
                                    id={`inline-radio-2`}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="depositdate">
                            <Form.Label column sm="2" className='fw-bolder'>
                                입금일자
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="date"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="taxreturn">
                            <Form.Label column sm="2" className='fw-bolder'>
                                세금신고
                            </Form.Label>
                            <Col sm="10">
                                <Form.Check
                                    inline
                                    label="N"
                                    name="taxreturn"
                                    type="radio"
                                    id={`inline-radio-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Y"
                                    name="taxreturn"
                                    type="radio"
                                    id={`inline-radio-2`}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="evidence">
                            <Form.Label column sm="2" className='fw-bolder'>
                                증빙
                            </Form.Label>
                            <Col sm="10">
                                <Form.Select aria-label="Default select example">
                                    <option>선택 하세요.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        취소
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        저장
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton className='bg-ddd'>
                    <Modal.Title className='fs-5 fw-bolder'>재고금융 등록</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Card className='w-100 my-3 bg-ddd'>
                            <Card.Body>
                                <div className='justify-content-evenly'>
                                    <p className='mb-0 fs-6 fw-bolder'>{name} / {carnum} ({carname}, {carmileage}Km)</p>
                                    <p className='mb-0 fs-6 fw-bolder'>매입비 33,000,000원</p>
                                </div>
                            </Card.Body>
                        </Card>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="carinfocategory">
                            <Form.Label column sm="3" className='fw-bolder'>
                                대출구분
                            </Form.Label>
                            <Col sm="9">
                                <Form.Check
                                    inline
                                    checked
                                    label="캐피탈"
                                    name="loansclass"
                                    type="radio"
                                    id={`inline-radio-1`}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="evidence">
                            <Form.Label column sm="3" className='fw-bolder'>
                                대출업체
                            </Form.Label>
                            <Col sm="9">
                                <Form.Select aria-label="Default select example">
                                    <option>현대캐피탈</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="carinfoamount">
                            <Form.Label column sm="3" className='fw-bolder'>
                                대출금액
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" 
                                    placeholder="입력하세요" 
                                    value={inputs.name1}
                                    onClick={() => handleInputClick('name1', '30,000,000')}
                                    onChange={(e) => setInputs({ ...inputs, name1: e.target.value })}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="carinfoamount">
                            <Form.Label column sm="3" className='fw-bolder'>
                                대출기간
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" 
                                    placeholder="입력하세요" 
                                    value={inputs.name2}
                                    onClick={() => handleInputClick('name2', '3개월')}
                                    onChange={(e) => setInputs({ ...inputs, name2: e.target.value })}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="carinfoamount">
                            <Form.Label column sm="3" className='fw-bolder'>
                                캐피탈 이율
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" 
                                    placeholder="입력하세요" 
                                    value={inputs.name3}
                                    onClick={() => handleInputClick('name3', '8%')}
                                    onChange={(e) => setInputs({ ...inputs, name3: e.target.value })}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="carinfoamount">
                            <Form.Label column sm="3" className='fw-bolder'>
                                딜러 이율
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" 
                                    placeholder="입력하세요" 
                                    value={inputs.name4}
                                    onClick={() => handleInputClick('name4', '10%')}
                                    onChange={(e) => setInputs({ ...inputs, name4: e.target.value })}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="depositdate">
                            <Form.Label column sm="3" className='fw-bolder'>
                                대출실행일
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control 
                                    type="date"
                                    value={inputs.name5}
                                    onClick={() => handleInputClick('name5', '2023-12-06')}
                                    onChange={(e) => setInputs({ ...inputs, name5: e.target.value })}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="depositdate">
                            <Form.Label column sm="3" className='fw-bolder'>
                                최초납입일
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control 
                                    type="date"
                                    value={inputs.name6}
                                    onClick={() => handleInputClick('name6', '2023-12-25')}
                                    onChange={(e) => setInputs({ ...inputs, name6: e.target.value })}
                                />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => handleShow3()} className="w-100">
                        재고금융 계산
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal show={show3} onHide={handleClose3} className="mx-700">
                <Modal.Header closeButton className='bg-ddd'>
                    <Modal.Title className='fs-5 fw-bolder'>재고금융 계산</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='ms-2 mb-0 fs-6'>{name} / {carnum} ({carname}, {carmileage}), 매입비 33,000,000원</p>
                    <Card className='w-100 mt-3 mb-4 py-0 bg-ddd'>
                        <Card.Body>
                            <div className='justify-content-evenly'>
                                <div className='d-flex mb-3'>
                                    <p className='mb-0 fs-6 fw-bolder col-4'>대출업체 : 현대캐피탈</p>
                                    <p className='mb-0 fs-6 fw-bolder col-4'>대출실행일 : 2023.12.06</p>
                                    <p className='mb-0 fs-6 fw-bolder col-4'>대출 기간 : 3개월</p>
                                </div>
                                <div className='d-flex'>
                                    <p className='mb-0 fs-6 fw-bolder col-4'>대출금액 : 30,000,000</p>
                                    <p className='mb-0 fs-6 fw-bolder col-4'>이율 : 8%</p>
                                    <p className='mb-0 fs-6 fw-bolder col-4'>이자인출일 : 25일</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Table className="text-center">
                        <thead>
                            <tr>
                                <th className='bg-ddd'>회차</th>
                                <th className='bg-ddd'>이자납입일</th>
                                <th className='bg-ddd'>캐피탈 이자</th>
                                <th className='bg-ddd'>딜러 이자</th>
                                <th className='bg-ddd'>총 납입이자</th>
                            </tr>
                        </thead>
                        <tbody className='align-middle'>
                            {/* <tr>
                                <td>1회</td>
                                <td>2023-01-25</td>
                                <td>1,250,000원</td>
                                <td>410,000</td>
                                <td>1,660,000</td>
                            </tr> */}
                        </tbody>
                    </Table>
                </Modal.Body>          
                <Modal.Footer>
                    <Button variant="primary" onClick={() => handleClose3()} className="w-100">
                        재고금융 실행
                    </Button>
                </Modal.Footer>
            </Modal>
        </Accordion.Body>
    );
}

export default CarInfoTable;
