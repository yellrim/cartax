'use client'
import 'bootstrap/dist/css/bootstrap.css';
import styles from './page.module.css'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem1 from '../../component/AccordionItem1';
import AccordionItem2 from '../../component/AccordionItem2';
import AccordionItem3 from '../../component/AccordionItem3';
import AccordionItem4 from '../../component/AccordionItem4';
import AccordionItem5 from '../../component/AccordionItem5';
import AccordionItem6 from '../../component/AccordionItem6';
import AccordionItem7 from '../../component/AccordionItem7';

export default function Home() {
  const dataForAccordionItem = {
    name: "홍길동",
    contact: "01012345678",
    securitynum: "801205-*******",
    email: "ddok@naver.com",
    otherinfo: ".",
    carnum: "153나7166",
    carname: "G70",
    carinfoyear:"2001년식",
    carmileage: "232,800Km",
    dateprsnt: "2023-12-08",
    caridnumber: "KMHEM42APXA123456",
    offerprice: "30,000,000",
    acqsttax: "315,000",
    categoryprsnt: "상사",
    dealer: "이광훈 딜러",
    depositprsnt: "(X)70,000,000",
    evidence: false,
    memo:"."
  };

  return (
    <div className="App-header">
      {/*조회 정보*/}
      <Card className='w-95 my-3'>
          <Card.Body>
              <div className='d-flex justify-content-evenly'>
                  <p className='mb-0 fs-5 fw-bolder'> {dataForAccordionItem.carnum}({dataForAccordionItem.carname}, {dataForAccordionItem.carmileage}Km)</p>
                  <p className='mb-0 fs-5 fw-bolder'>{dataForAccordionItem.name}({dataForAccordionItem.contact})</p>
              </div>
          </Card.Body>
      </Card>
      {/* 아코디언 메뉴 */}
      <Accordion defaultActiveKey="0" flush className='w-95 mb-4'>
          <Accordion.Item eventKey="0">
            <Accordion.Header className='fs-5 fw-bolder' >차량정보</Accordion.Header>
            <AccordionItem1 data={dataForAccordionItem}/>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className='fs-5 fw-bolder'>제시 고객 정보</Accordion.Header>
            <AccordionItem2 data={dataForAccordionItem}/>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className='fs-5 fw-bolder'>상품화비용</Accordion.Header>
            <AccordionItem3 data={dataForAccordionItem}/>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className='fs-5 fw-bolder'>재고금융이자</Accordion.Header>
            <AccordionItem4 data={dataForAccordionItem}/>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header className='fs-5 fw-bolder'>매도정보</Accordion.Header>
            <AccordionItem5 data={dataForAccordionItem}/>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header className='fs-5 fw-bolder'>알선 정보</Accordion.Header>
            <AccordionItem6 data={dataForAccordionItem}/>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header className='fs-5 fw-bolder'>정산자료 집계</Accordion.Header>
            <AccordionItem7 data={dataForAccordionItem}/>
          </Accordion.Item>
      </Accordion>
    </div>
  )
}


