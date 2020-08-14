import 'antd/dist/antd.css';
import { Card } from 'antd';
import React from 'react';



const CustomCard = ({country, loading, mode})=> {
    if (loading) {
        return <h2>Loading...</h2>
    }
    const { Meta } = Card;
    return (  country.map( country => (
            <div style={{padding: "10px" }} >
            <Card 
                hoverable
                style={{ width: 240, backgroundColor: mode?"white" : "#121212"}}
                cover={<img alt="example" src= {country.flag} height= "150" />}
            >
                <div style={{ color: mode?"#121212" :"white"}}>
                {country.name} 
                </div>
                <div style= {{display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: mode?"white" : "#121212",  color: mode?"#333333" :"white"}}>
                    <div >
                        <img src ="logo here"/> {country.capital}
                    </div>
                    <div>
                        <img src ="logo here"/>{country.population}
                    </div>
                </div>
            </Card>
        </div>
    )

        )
        
    );
}

export default CustomCard;
