import React from 'react';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

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
        billingamount: '',
        dlrdpamnt:'',
        dlrdpdt:'',
        selldate: '',
        sellname: '',
        sellcontact: '',
        saleprice: '',
        sellingcost: '',
    });

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false) ;
    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);

    const handleInputClick = (field: string, value: string) => {
        setInputs({ ...inputs, [field]: value });
    };
    const [performanceCheck, setPerformanceCheck] = useState({
        billingamount: '',
        dlrdpdt: '',
        dlrdpamnt: '',
    });
    const [isRegistered, setIsRegistered] = useState(false);

    const handleRegistration = () => {
        setPerformanceCheck({
            billingamount: '456,400',
            dlrdpdt: '2023-11-14',
            dlrdpamnt: '456,400',
        });
        handleClose();
        setIsRegistered(true);
    };

    return (
        
        <Accordion.Body>
        <div className='d-flex justify-content-between align-items-center mb-2'>
            <p className='m-0'>입금이 완료되지 않은 건은 녹색으로 표시 됩니다.</p>
            <Button variant="primary" onClick={handleShow}>
                등록
            </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className='bg-ddd'>
                <Modal.Title className='fs-5 fw-bolder'>상품화비용 등록</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-5" controlId="formGroupEmail">
                        <Form.Label className='fw-bolder'>| 구분</Form.Label>
                        <Form.Select>
                            <option>기타비용</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="formGroupPassword">
                        <Form.Label className='fw-bolder'>| 증빙</Form.Label>
                        <Form.Select>
                            <option>기타비용_계산서.pdf</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="billingamount">
                        <Form.Label className='fw-bolder'>| 총금액</Form.Label>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default" placeholder='청구금액을 입력합니다.'
                            value={inputs.billingamount}
                            onClick={() => handleInputClick('billingamount', '456,400')}
                            onChange={(e) => setInputs({ ...inputs, billingamount: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formGroupPassword">
                        <Form.Label className='fw-bolder'>| 딜러입금일</Form.Label>
                        <Form.Control type="date"
                            value={inputs.dlrdpdt}
                            onClick={() => handleInputClick('dlrdpdt', '2023-11-14')}
                            onChange={(e) => setInputs({ ...inputs, dlrdpdt: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label className='fw-bolder'>| 딜러입금</Form.Label>
                        <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default" placeholder='딜러가 입금한 금액을 입력합니다.'
                        value={inputs.dlrdpamnt}
                        onClick={() => handleInputClick('dlrdpamnt', '456,400')}
                        onChange={(e) => setInputs({ ...inputs, dlrdpamnt: e.target.value })}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                취소
            </Button>
            <Button variant="primary" onClick={handleRegistration}>
                등록
            </Button>
            </Modal.Footer>
        </Modal>
        <Table className="text-center">
            <thead>
                <tr>
                    <th className='bg-ddd'>구분</th>
                    <th className='bg-ddd'>증빙</th>
                    <th className='bg-ddd'>청구금액</th>
                    <th className='bg-ddd'>입금금액 입금일자</th>
                    <th className='bg-ddd'>지출자</th>
                    <th className='bg-ddd'></th>
                </tr>
            </thead>
            <tbody className='align-middle'>
                {isRegistered ? (
                    <tr>
                    <td>기타비용</td>
                    <td>기타비용_계산서.pdf</td>
                    <td>{performanceCheck.billingamount}</td>
                    <td>{performanceCheck.dlrdpdt}</td>
                    <td>딜러</td>
                    <td>
                        <Button variant="primary" className='rounded-pill btn-jeungbing me-2 col-2'>수정</Button>{' '}
                        <Button className='w-50'>
                            <span className="ms-1">재고금융 이용</span>
                        </Button>
                    </td>
                    </tr>
                ) : (
                    <tr>
                    <td colSpan={5}>등록된 정보가 없습니다.</td>
                    </tr>
                )}
                <tr>
                    <td className='bg-ddd'>합계</td>
                    <td className='bg-ddd'></td>
                    <td className='bg-ddd'></td>
                    <td className='bg-ddd'></td>
                    <td className='bg-ddd'></td>
                    <td className='bg-ddd'></td>
                </tr>
            </tbody>
        </Table>
        <p> * 상품화 비용 등록시, 재고금융을 연동 할 수있습니다.</p>

        <Button variant="primary" size="lg" className='w-100 my-3' onClick={handleShow2}>
            <p className='m-0 fs-5 fw-bolder'>매도처리</p>
        </Button>


        <Modal show={show2} onHide={handleClose2} className="mx-700">
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
                            <Form.Control type="date"
                                value={inputs.selldate}
                                onClick={() => handleInputClick('selldate', '2023-12-04')}
                                onChange={(e) => setInputs({ ...inputs, selldate: e.target.value })}
                            />
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
                            <Form.Control type="text" 
                                placeholder="입력하세요"
                                value={inputs.sellname}
                                onClick={() => handleInputClick('sellname', '김철수')}
                                onChange={(e) => setInputs({ ...inputs, sellname: e.target.value })}
                            />
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
                            <Form.Control type="text" 
                                placeholder="입력하세요" 
                                value={inputs.sellcontact}
                                onClick={() => handleInputClick('sellcontact', '1098769876')}
                                onChange={(e) => setInputs({ ...inputs, sellcontact: e.target.value })}    
                            />
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
                            <Form.Control type="text" 
                                placeholder="입력하세요"
                                value={inputs.saleprice}
                                onClick={() => handleInputClick('saleprice', '38,000,000')}
                                onChange={(e) => setInputs({ ...inputs, saleprice: e.target.value })}    
                            />
                        </Col>
                        <Col sm="5">
                            <Form.Check
                                required
                                checked
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
                            <Form.Control type="text" 
                                placeholder="입력하세요" 
                                value={inputs.sellingcost}
                                onClick={() => handleInputClick('sellingcost', '440,000')}
                                onChange={(e) => setInputs({ ...inputs, sellingcost: e.target.value })}    
                            />
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
                            <Form.Check
                                inline
                                checked
                                label="세금계산서"
                                name="proofprchs"
                                type="radio"
                                id={`inline-radio-1`}
                            />
                            <Form.Check
                                inline
                                label="카드"
                                name="proofprchs"
                                type="radio"
                                id={`inline-radio-2`}
                            />
                            <Form.Check
                                inline
                                label="현금영수증"
                                name="proofprchs"
                                type="radio"
                                id={`inline-radio-2`}
                            />
                            <Form.Check
                                inline
                                label="무증빙"
                                name="proofprchs"
                                type="radio"
                                id={`inline-radio-2`}
                            />
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
                <Button variant="secondary" onClick={handleClose2}>
                    취소
                </Button>
                <Button variant="primary" onClick={handleClose2}>
                    매도
                </Button>
            </Modal.Footer>
        </Modal>
        </Accordion.Body>
    );
}

export default CarInfoTable;
