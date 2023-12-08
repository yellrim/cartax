import React from 'react';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
    });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputClick = (field: string, value: string) => {
        setInputs({ ...inputs, [field]: value });
    };

    return (
        <Accordion.Body>
            <div className='d-flex justify-content-between text-end mb-2'>
                <p className='mb-0 fs-5'>- 매도고객정보</p>
                <Button variant="primary">수정</Button>{' '}
            </div>
            <div className='d-flex'>
                <div className='col-6'>
                    <Table bordered hover className='mb-m-1'>
                        <tbody>
                            <tr>
                                <th className='bg-ddd'>이름</th>
                                <td>김철수</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>제시고객 타입</th>
                                <td>개인</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>주민(법인)번호</th>
                                <td>770101-1009901</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>매도일</th>
                                <td>2023-12-04</td>
                            </tr>
                            {/* <tr>
                                <th className='bg-ddd'>회사명</th>
                                <td>하나상사</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>대표자</th>
                                <td>홍길동</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>업태</th>
                                <td>도소매</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>회사 연락처</th>
                                <td>02-9876-1001</td>
                            </tr> */}
                        </tbody>
                    </Table>
                </div>
                <div className='col-6'>
                    <Table bordered hover className='mb-m-1 col-6'>
                        <tbody>
                            <tr>
                                <th className='bg-ddd'>연락처</th>
                                <td>1098769876</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>비사업사실용확인서</th>
                                <td>Y</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>FAX</th>
                                <td>9876-1002</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'></th>
                                <td></td>
                            </tr>
                            {/* <tr>
                                <th className='bg-ddd'>사업자번호</th>
                                <td>214-09-000001</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>주민(법인)번호</th>
                                <td>770101-1009901</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>종목</th>
                                <td>셔츠외</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>FAX</th>
                                <td>9876-1002</td>
                            </tr> */}
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className='col-12'>
                <Table bordered hover>
                    <tbody>
                        {/* <tr>
                            <th className='bg-ddd'>주소</th>
                            <td>서울특별시</td>
                        </tr> */}
                        <tr>
                            <th className='bg-ddd'>메모</th>
                            <td>메모를 여기에 입력합니다.</td>
                        </tr>
                    </tbody>
                </Table>
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
                    </tr>
                </thead>
                <tbody className='align-middle'>
                    <tr>
                        <td>매도금액</td>
                        <td>38,000,000</td>
                        <td></td>
                        <td>2023-12-04</td>
                        <td>Y</td>
                        <td><Button variant="primary" className='rounded-pill btn-jeungbing'>세계</Button>{' '}</td>
                    </tr>
                    <tr>
                        <td>매도비</td>
                        <td>440,000</td>
                        <td></td>
                        <td>2023-12-04</td>
                        <td>Y</td>
                        <td><Button variant="primary" className='rounded-pill btn-jeungbing'>세계</Button>{' '}</td>
                    </tr>
                </tbody>
            </Table>
            <p> 
                * 알선을 통하여 자동차를 매수 하였습니다.
                <Button variant="primary" onClick={handleShow} className="ms-1">
                    알선 등록
                </Button>
            </p>    
            <Button variant="primary" size="lg" className='w-100 my-3'>
                <p className='m-0 fs-5 fw-bolder'>정산서 확인</p>
            </Button>
            <Modal show={show} onHide={handleClose} className="mx-700">
                <Modal.Header closeButton className='bg-ddd'>
                    <Modal.Title className='fs-5 fw-bolder'>알선정보 등록</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <td>알선 구분</td>
                                <td>
                                    <div key={`inline-radio`}>
                                        <Form.Check
                                            inline
                                            label="타상사"
                                            name="group1"
                                            type="radio"
                                            className="form-check-custom"
                                            id={`inline-radio-1`}
                                        />
                                        <Form.Check
                                            inline
                                            checked
                                            label="우리상사"
                                            name="group1"
                                            type="radio"
                                            className="form-check-custom"
                                            id={`inline-radio-2`}
                                        />
                                    </div>
                                </td>
                                <td colSpan={2}>*판매를 한 상사가 타상사인지를 구분합니다.</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>판매 구분</td>
                                <td>
                                    <div key={`inline-radio`}>
                                        <Form.Check
                                            inline
                                            checked
                                            label="딜러"
                                            name="group2"
                                            type="radio"
                                            className="form-check-custom"
                                            id={`inline-radio-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="상사"
                                            name="group2"
                                            type="radio"
                                            className="form-check-custom"
                                            id={`inline-radio-2`}
                                        />
                                    </div>
                                </td>
                                <td colSpan={2}>*딜러(사업소득), 상사(세금계산서)으로 처리</td>
                            </tr>
                            <tr>
                                <td>알선 딜러</td>
                                <td>
                                <Form.Select aria-label="Default select example">
                                    <option>이홍규</option>
                                </Form.Select>
                                </td>
                                <td colSpan={2}>타상사의 딜러의 경우, 타상사 정보를 입력</td>
                            </tr>
                            <tr>
                                <td>알선 매출(세전)</td>
                                <td>
                                    <input type="text" 
                                        className='border border-black' 
                                        value={inputs.input1}
                                        onClick={() => handleInputClick('input1', '3,000,000')}
                                        onChange={(e) => setInputs({ ...inputs, input1: e.target.value })}
                                    />
                                </td>
                                <td colSpan={2}>*세전 판매 금액을 입력하세요.</td>
                            </tr>
                            <tr>
                                <td>부가세(10%)</td>
                                <td>
                                    <input type="text" 
                                        className='border border-black'
                                        value={inputs.input2}
                                        onClick={() => handleInputClick('input2', '272,728')}
                                        onChange={(e) => setInputs({ ...inputs, input2: e.target.value })}
                                    />
                                </td>
                                <td colSpan={2}>부가세 금액을 자동 계산합니다.</td>
                            </tr>
                            <tr>
                                <td>소득세(3.3%)</td>
                                <td>
                                    <input type="text" 
                                        className='border border-black'
                                        value={inputs.input3}
                                        onClick={() => handleInputClick('input3', '90,000')}
                                        onChange={(e) => setInputs({ ...inputs, input3: e.target.value })}
                                    />
                                </td>
                                <td colSpan={2}>공급가 금액을 자동 계산합니다.</td>
                            </tr>
                            <tr>
                                <td>최종지금액(세후)</td>
                                <td>
                                    <input type="text" 
                                        className='border border-black'
                                        value={inputs.input4}
                                        onClick={() => handleInputClick('input4', '2,637,272')}
                                        onChange={(e) => setInputs({ ...inputs, input4: e.target.value })}
                                    />
                                </td>
                                <td colSpan={2}>공급가 금액을 자동 계산합니다.</td>
                            </tr>
                            <tr>
                                <td>알선 수수료 입금계좌</td>
                                <td>
                                    <input type="text" 
                                        className='border border-black'
                                        value={inputs.input5}
                                        onClick={() => handleInputClick('input5', '기업 123-12-*12345 이홍규')}
                                        onChange={(e) => setInputs({ ...inputs, input5: e.target.value })}
                                    />
                                </td>
                                <td colSpan={2}>공급가 금액을 자동 계산합니다.</td>
                            </tr>
                            <tr>
                                <td>상사명</td>
                                <td>
                                <Form.Select aria-label="Default select example">
                                    <option>(주) 뉴카카</option>
                                </Form.Select>
                                </td>
                                <td colSpan={2}>타상사의 딜러의 경우, 타상사 정보를 입력</td>
                            </tr>
                            <tr>
                                <td>상사 연락처</td>
                                <td>
                                    <input type="text" 
                                        className='border border-black'
                                        value={inputs.input6}
                                        onClick={() => handleInputClick('input6', '홍길동')}
                                        onChange={(e) => setInputs({ ...inputs, input6: e.target.value })}
                                    />
                                </td>
                                <td colSpan={2}>*타상사의 연락처를 확인 합니다.</td>
                            </tr>
                            <tr>
                                <td>알선 특이사항</td>
                                <td colSpan={3}><input type="text" className='border border-black' /></td>
                            </tr>
                        </tbody>
                        </Table>
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
        </Accordion.Body>
        
    );
}

export default CarInfoTable;
