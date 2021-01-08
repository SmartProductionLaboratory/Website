import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import { Divider } from 'semantic-ui-react'
import "./works.css"
import 'bootstrap/dist/css/bootstrap.min.css';




class Works extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            projects : [
                ["工業技術研究院", "金屬加工產業先進排程啟發式演算法研究"],
                ["天工精密股份有限公司", "鋼珠製造廠生產排程最佳化決策支援系統"],
                ["協雲科技股份有限公司", "製鞋廠生產排程最佳化決策支援系統"],
                ["天源義記機械股份有限公司", "動力傳動鏈條配件廠生產排程最佳化決策支援系統"],
                // ["鋼珠製造廠生產排程最佳化決策支援系統", "鋼珠製造廠生產排程最佳化決策支援系統"],
                ["科技部", "製鞋智動化機電系統暨網宇虛實整合開發計畫 (1/3~3/3)"],
                ["科技部", " 動力傳動與輸送鏈條製造廠生產排程與模擬系統(1/2~2/2)"],
                ["科技部","新興科技創新營運模式－台灣智慧製造創新營運中心-總計畫及子計畫二、四、五 (3/4~4/4)"],
                ["科技部", "薄膜電晶體液晶顯示器薄膜廠微影製程站排程最佳化及其決策支援系統"],
                ["友達光電股份有限公司", "TFT-LCD Array生產規劃與排程之改善與解決方案"],
                ["普生股份有限公司", "生物晶片生產排程"],
                ["創意電子股份有限公司", "IC設計系統資源之排程控制策略整合與發展"],
                ["台灣積體電路股份有限公司", "應用基因演算法改善派工與排程問題"],
                ["台達電子工業股份有限公司", "先進智能製造系統規劃建議"],
                ["晶元光電股份有限公司", "建立LED廠跨廠區人力資源需求模型"],
                ["晶元光電股份有限公司", "應用先進製程控制降低半導體線寬與覆蓋誤差"],
                

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
                    </tr>
                </thead>
                <tbody>
                {this.state.projects.map((value, index)=>{
                    return (<tr>
                        <td>{index + 1}</td>
                        <td>{value[0]}</td>
                        <td>{value[1]}</td>
                    </tr>);
                })}
                </tbody>
            </Table>
        </div>);
    }

}

export default Works;