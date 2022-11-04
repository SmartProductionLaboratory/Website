import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import { Divider } from 'semantic-ui-react'
import "./styles/Works.css"
import 'bootstrap/dist/css/bootstrap.min.css';




class Works extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            projects : [
                ["工業技術研究院", "金屬加工產業先進排程啟發式演算法研究","2021/01 ~ 2021/05"],
                ["天工精密股份有限公司", "鋼珠製造廠生產排程最佳化決策支援系統","2021/01 ~ 2021/05"],
                ["協雲科技股份有限公司", "製鞋廠生產排程最佳化決策支援系統","2019/09  ~2020/02"],
                ["天源義記機械股份有限公司", "動力傳動鏈條配件廠生產排程最佳化決策支援系統","2019/08 ~ 2020/07"],
                // ["鋼珠製造廠生產排程最佳化決策支援系統", "鋼珠製造廠生產排程最佳化決策支援系統",],
                ["科技部", "製鞋智動化機電系統暨網宇虛實整合開發計畫 (1/3~3/3)","2021/08 ~ 2024/07"],
                ["科技部", " 動力傳動與輸送鏈條製造廠生產排程與模擬系統(1/2~2/2)","2019/08 ~ 2021/07"],
                ["科技部","新興科技創新營運模式－台灣智慧製造創新營運中心-總計畫及子計畫二、四、五 (3/4~4/4)","2019/06 ~ 2021/05"],
                ["科技部", "薄膜電晶體液晶顯示器薄膜廠微影製程站排程最佳化及其決策支援系統","2018/08 ~ 2019/07"],
                ["科技部","半導體封裝廠智慧投料及平行計算生產排程與良率分析之決策支援系統(1/3~3/3)"],
		["友達光電股份有限公司","TFT-LCD Cell FEOL排程最佳化","2022/02 ~ 2023/03"],
		["台達電子工業股份有限公司","機台健康診斷(五)：利用模型殘差診斷機械振動與外擾力","2020/09 ~ 2021/08"],
		["工業技術研究院","外包交期不確定性推估技術委託驗證-萬用啟發式排程演算法","2021/05 ~ 2021/11"],
		["工業技術研究院","外包交期不確定性推估技術委託驗證-生產平準化方法","2021/04 ~ 2021/11"],
		["南茂科技股份有限公司 ","智能生產排程暨排線系統建置","2021/01 ~ 2022/06"],
		["台達電子工業股份有限公司 ","以分層式架構進行機構之健康診斷(四)","2020/09 ~ 2021/08"],
		["日月光半導體製造股份有限公司 ","多機多產品之生產排程最佳化","2022/09 ~ 2023/08"],
		["國巨股份有限公司 ","Binder Burn Out (BBO)自動排程","2022/07 ~ 2023/06"],
	        ["工業技術研究院 ","基因演算法排程技術委託驗證勞務委託","2022/09 ~ 2022/126"],
		["台達電子工業股份有限公司 ","機台健康診斷(六):人工智慧演算法用於機械異常診斷與分類","2022/09 ~ 2023/02"],
		    
            ]
        }
    }

    render(){
        return (<div id="Works">
            
            <Divider/>
            <div className="title">
                <h1>Our Works</h1>
            </div>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>合作單位</th>
                        <th>計劃名稱</th>
		        <th>計畫期間</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.projects.map((value, index)=>{
                    return (<tr>
                        <td>{index + 1}</td>
                        <td>{value[0]}</td>
                        <td>{value[1]}</td>
                        <td>{value[2]}</td>
                    </tr>);
                })}
                </tbody>
            </Table>
        </div>);
    }

}

export default Works;
