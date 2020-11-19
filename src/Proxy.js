import React, { Component } from "react";
import axios from "axios";

export default class Proxy extends Component {
  componentDidMount() {
    // axios.get("/films.json").then((res) => {
    //   console.log(res);
    // });
    // axios.get(
    //     "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=8775493",
    //     {
    //       headers: {
    //         "X-Client-Info":
    //           '{"a":"3000","ch":"1002","v":"5.0.4","e":"16049772461361500337864706","bc":"110100"}',
    //         "X-Host": "mall.film-ticket.film.list",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   });

    axios.get("/api/ajax/movieOnInfoList?token=&optimus_uuid=9F71F9A02A4C11EBB24DD39652BF40789DA0340B75BB4E938DFCC2F552455948&optimus_risk_level=71&optimus_code=10").then(res=>{
        console.log(res)
    }) 

  }

  render() {
    return <div>proxy</div>;
  }
}
