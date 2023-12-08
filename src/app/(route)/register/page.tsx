'use client'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

export default function Home() {
    const [startDate, setStartDate] = useState(new Date());
    const [inputs, setInputs] = useState({
        name: '',
        contact: '',
        securitynum: "",
        email: "",
        otherinfo: "",
        carnum: "",
        carname: "",
        carinfoyear: "",
        carmileage: "",
        dateprsnt: "",
        caridnumber: "",
        offerprice: "",
        acqsttax: "",
        categoryprsnt: "",
        dealer: "",
        depositprsnt: "",
        evidence: false,
        memo:""
    });
    
    const handleInputClick = (field: string, value: string) => {
        setInputs({ ...inputs, [field]: value });
    };
    
    return (
        <div className="App-header">
            <p className='fs-3 fw-bolder mt-5'>제시차량 등록</p>

            
            <Form className='w-95'>
                <p className='fs-5 fw-bolder mt-5 text-start'>| 제시자</p>
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="name">
                    <Form.Label column sm="2">
                    이름
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control
                        type="text"
                        placeholder="입력하세요"
                        value={inputs.name}
                        onClick={() => handleInputClick('name', '홍길동')}
                        onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                    />
                    </Col>
                    <Col sm="5">
                    판매자 이름을 입력합니다.
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="contact">
                    <Form.Label column sm="2">
                    연락처
                    </Form.Label>
                    <Col sm="5">
                    <Form.Control
                        type="text"
                        placeholder="입력하세요"
                        value={inputs.contact}
                        onClick={() => handleInputClick('contact', '01012345678')}
                        onChange={(e) => setInputs({ ...inputs, contact: e.target.value })}
                    />
                    </Col>
                    <Col sm="5">
                    판매자 HP번호를 입력합니다.
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="securitynum">
                    <Form.Label column sm="2">
                        주민번호
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" placeholder="입력하세요" 
                        value={inputs.securitynum}
                        onClick={() => handleInputClick('securitynum', '801205-*******')}
                        onChange={(e) => setInputs({ ...inputs, securitynum: e.target.value })}
                        />
                    </Col>
                    <Col sm="5">
                        주민번호를 입력합니다.
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="email">
                    <Form.Label column sm="2">
                        E-Mail
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" placeholder="입력하세요" 
                        value={inputs.email}
                        onClick={() => handleInputClick('email', 'ddok@naver.com')}
                        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                        />
                    </Col>
                    <Col sm="5">
                        E-Mail을 입력합니다.
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="otherinfo">
                    <Form.Label column sm="2">
                        기타정보
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="입력하세요" 
                        value={inputs.otherinfo}
                        onClick={() => handleInputClick('otherinfo', '.')}
                        onChange={(e) => setInputs({ ...inputs, otherinfo: e.target.value })}
                        />
                    </Col>
                </Form.Group>

                <p className='fs-5 fw-bolder mt-5 text-start'>| 차량정보</p>
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="carnum">
                    <Form.Label column sm="2">
                        차량번호
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" placeholder="입력하세요" 
                        value={inputs.carnum}
                        onClick={() => handleInputClick('carnum', '153나7166')}
                        onChange={(e) => setInputs({ ...inputs, carnum: e.target.value })}
                        />
                    </Col>
                    <Col sm="5">
                        차량번호를 입력합니다.
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="carname">
                    <Form.Label column sm="2">
                        차명
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" placeholder="입력하세요" 
                        value={inputs.carname}
                        onClick={() => handleInputClick('carname', 'G70')}
                        onChange={(e) => setInputs({ ...inputs, carname: e.target.value })}
                        />
                    </Col>
                    <Col sm="5">
                        차명을 입력합니다.
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="carinfo">
                    <Form.Label column sm="2">
                        년식 / 주행거리
                    </Form.Label>
                    <Col sm="2">
                        <Form.Control type="text" placeholder="(년식 숫자)" 
                        value={inputs.carinfoyear}
                        onClick={() => handleInputClick('carinfoyear', '2001년식')}
                        onChange={(e) => setInputs({ ...inputs, carinfoyear: e.target.value })}
                        />
                    </Col>
                    <Col sm="3">
                        <Form.Control type="text" placeholder="(주행거리,km)" 
                        value={inputs.carmileage}
                        onClick={() => handleInputClick('carmileage', '232,800Km')}
                        onChange={(e) => setInputs({ ...inputs, carmileage: e.target.value })}
                        />
                    </Col>
                    <Col sm="5">
                        차량의 년식과 주행거리를 입력합니다.
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="dateprsnt">
                    <Form.Label column sm="2">
                        제시일자
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="date" value="2023-12-08"/>
                    </Col>
                    <Col sm="5">
                        제시일자를 입력합니다.
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="caridnumber">
                    <Form.Label column sm="2">
                        차대번호
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" placeholder="입력하세요" 
                        value={inputs.caridnumber}
                        onClick={() => handleInputClick('caridnumber', 'KMHEM42APXA123456')}
                        onChange={(e) => setInputs({ ...inputs, caridnumber: e.target.value })}
                        />
                    </Col>
                    <Col sm="5">
                        차대번호를 입력합니다.
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="offerprice">
                    <Form.Label column sm="2">
                        제시금액
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" placeholder="입력하세요" 
                        value={inputs.offerprice}
                        onClick={() => handleInputClick('offerprice', '30,000,000')}
                        onChange={(e) => setInputs({ ...inputs, offerprice: e.target.value })}
                        />
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
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="acqsttax">
                    <Form.Label column sm="2">
                        취득세
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" placeholder="입력하세요" 
                            value={inputs.acqsttax}
                            onClick={() => handleInputClick('acqsttax', '315,000')}
                            onChange={(e) => setInputs({ ...inputs, acqsttax: e.target.value })}
                        />
                    </Col>
                    <Col sm="5">
                        취득세를 입력합니다.
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="categoryprsnt">
                    <Form.Label column sm="2">
                        제시구분
                    </Form.Label>
                    <Col sm="5">
                        <Form.Check
                            checked
                            inline
                            label="상사"
                            name="group1"
                            type="radio"
                            id={`inline-radio-1`}
                        />
                        <Form.Check
                            inline
                            label="고객위탁"
                            name="group1"
                            type="radio"
                            id={`inline-radio-2`}
                        />
                    </Col>
                    <Col sm="5">
                        제시구분을 입력합니다.
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="dealer">
                    <Form.Label column sm="2">
                        담당딜러
                    </Form.Label>
                    <Col sm="5">
                        <Form.Select aria-label="Default select example">
                            <option>이광훈</option>
                        </Form.Select>
                    </Col>
                    <Col sm="5">
                        담당딜러를 선택하세요.
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="depositprsnt">
                    <Form.Label column sm="2">
                        제시입금액
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" placeholder="입력하세요" 
                            value={inputs.depositprsnt}
                            onClick={() => handleInputClick('depositprsnt', '33,315,000')}
                            onChange={(e) => setInputs({ ...inputs, depositprsnt: e.target.value })}
                        />
                    </Col>
                    <Col sm="5">
                        초기에 딜러가 입금한 금액입니다.
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="evidence">
                    <Form.Label column sm="2">
                        증빙자료
                    </Form.Label>
                    <Col sm="5">
                        <Form.Select aria-label="Default select example">
                            <option>매입증빙.jpg</option>
                        </Form.Select>
                    </Col>
                    <Col sm="5">
                        <Form.Check
                            required
                            label="재활용폐자원여부"
                            feedback="제출하기 전에 동의해야 합니다."
                            feedbackType="invalid"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 align-items-center" controlId="memo">
                    <Form.Label column sm="2">
                        메모
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="입력하세요" 
                            value={inputs.memo}
                            onClick={() => handleInputClick('memo', '특이사항없음')}
                            onChange={(e) => setInputs({ ...inputs, memo: e.target.value })}
                        />
                    </Col>
                </Form.Group>
            </Form>

            <a href="/info" className='w-95 my-5 text-white bg-primary text-decoration-none p-2 rounded-3 text-center fs-5'>
                등록
            </a>
        </div>
    )
}