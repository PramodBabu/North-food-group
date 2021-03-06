import React from "react";
import { Card, Col, Row, Space } from 'antd';
import Brand from './Brands';
import Gallery from './Gallery';
import CarouselBanner from './carousel';

const HomeContent = () => {

    const contentStyle = {
        height: '500px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    const cardCover = {
        objectFit: 'fill',
        height: '250px'
    }

    const cardCover3 = {
        objectFit: 'contain',
        paddingTop: '5px'
    }

    const cardCover4 = {
        marginTop: '5px',
        height: '200px',
        width: '100%',
        borderRadius: '20px'
    }

    const cardDiv1 = {
        display: 'flex',
        justifyContent: 'center'
    }

    const featuredThumbnails = [
        ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGg1-YRHK8jjfXCFKEhBmS4PDRtXUm4HqQA&usqp=CAU', 'Beef', 'Steaks, Chucks'],
        ['https://www.thespruceeats.com/thmb/kEhDx3Zpy6-MnzrDBDAegFK0R_A=/3801x3801/smart/filters:no_upscale()/cubed-cheese-85536623-5a9375a5a9d4f900365cb3cd.jpg', 'Cheese', 'Cheddar, Mozarella'],
        ['https://i.insider.com/5ebc0ff0fc593d02e70c2633?width=1136&format=jpeg', 'Seafood', 'Basa, King fish'],
        ['https://img.etimg.com/thumb/msid-69712122,width-640,resizemode-4,imgsize-1226932/eat-your-fruits-and-veggies-to-avoid-strokes.jpg', 'Vegetable and Frui', 'Broccoli, Eggplant']
    ];

    const trendingThumbnails = [
        ['https://www.blackwellsfarmproduce.co.uk/wp-content/uploads/2018/10/Blackwells-Beef-Rolled-Rib-Of-Beef.jpg', 'Beef Chuck Roll', 'Boneless'],
        ['https://images.immediate.co.uk/production/volatile/sites/30/2020/08/the-health-benefits-of-salmon-700-350-5baa608.jpg?quality=90&resize=768,574', 'Salmon fish', 'Fish'],
        ['https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg', 'Tomatoes', 'Vegetable'],
        ['https://delmontefoodservice.com/sites/default/files/product/CSI_Bulk-Fruit_Cocktail_2001651.png', 'Fruit Cocktail', 'Canned foods']
    ];

    const prods = [
        'https://lh5.googleusercontent.com/cEt6EqC2yAesjlhbZn5tnAyPD_mzNJjNBhLYPIUEUhRd27u8U8rMbqMhk50WyfI1cD_eCAS9tSnqD7yPw5ADq682Wu-X5DXQVjtSXKdR',
        'https://lh5.googleusercontent.com/bdtYe77SQSu7jou6NtTSQVe9KXFU2wOA8qNohfT4QJYndOeWN13DJ_ZH5aZJOA5W2E4-Sfg8C1zIHDUAeuZygNFrM9e8v7t5A6bt7n15'
    ];

    const banner = [
        'https://lh3.googleusercontent.com/EQn0xt-9nK6UhMi51thjVjnTsJE_Lrnbs2GWeMGwbjb85s4UBb9FkY-gx9ZxUVZb5bFJhiYIH80x4yVPKqDMbVY1bXrf5-ev34A1G2Y7',
        'https://lh6.googleusercontent.com/I5YMnwvkzk8jWT4Gg4U7TDKfHkyJ1VEUMI8j-527wbqYh3SBazJYGl_PuRrtdv0CPSR2BV1nQj030aRc_16vcwsgBREeGMeJlsntRyHY',
        'https://lh6.googleusercontent.com/6B7FXfZVmes77BawPnXYgh3cHKiR6_Rv2JZyO-5jzzTtmnk6TJuFXN6dZKq74b2xgMt0gVhBH-ZOTgPY03Kz99pAyh-jej3sZAXauSfQ'
    ];
    
    return (
        <div className="mt-10" style={{ padding: '0px', marginBottom: '20px'}}>
            <div>
                <CarouselBanner />
            </div>

            <div style={{padding: '50px', backgroundColor: 'lightgrey'}}>
                    <Gallery />
            </div>
            <div className="row-fluid" style={{ padding: '20px', margin: '10px', display: 'flex',justifyContent: 'center',flexWrap: 'wrap' }}>
                {banner.map(item => (
                    <img
                        alt="example"
                        src={item}
                        style={cardCover3}
                        className="col-xs-12 col-sm-3 col-md-3 col-lg-3"
                    />
                ))}
            </div>
            <div style={{ height: '200px', marginTop: '10px'}}>
                    <Brand />
            </div>
            <div style={{padding: '10px'}}>
                <h2 className="text-center">Featured Products</h2>
                <div className="row" style={{ padding: '20px', display: 'flex',justifyContent: 'center',flexWrap: 'wrap' }}>
                    {featuredThumbnails.map(item => (
                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <img
                            alt="example"
                            src={item[0]}
                            style={cardCover4}
                            className="img-responsive"
                        />
                        <span className="h3">{item[1]}</span>  
                        <p>{item[2]}</p>
                        </div>
                    ))}
                </div>
                {/* <div>
                    <div class="col-sm">col-sm</div>
                    <div class="col-sm">col-sm</div>
                    <div class="col-sm">col-sm</div>
                </div> */}
            </div>
            <div style={{padding: '10px'}}>
                <h2 className="text-center">Trending Products</h2>
                <div className="row" style={{ padding: '20px', display: 'flex',justifyContent: 'center',flexWrap: 'wrap' }}>
                    {trendingThumbnails.map(item => (
                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                            <img
                            alt="example"
                            src={item[0]}
                            style={cardCover4}
                        />
                        <span className="h3">{item[1]}</span>  
                        <p>{item[2]}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div style={{ backgroundColor: 'lightblue', padding: '10px'}}>
                <div className="site-card-wrapper"> */}
                    {/* <Row gutter={10} style={{ paddingTop: '20px', display: 'flex', justifyContent: 'center' }}>
                        {
                            prods.map(element => (
                                <Col span={10}>
                                    <Card
                                        style={{ height: '250px', width: '500px'}}
                                        cover={
                                            <img
                                                alt="example"
                                                src={element[0]}
                                                style={cardCover}
                                            />} 
                                        bordered={false}>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row> */}
            <div style={{padding: '10px'}}>
                <div>
                    <div className="row" style={{ padding: '20px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                        {prods.map(item => (
                            <img
                            style={{maxWidth: '500px'}}
                                alt="example"
                                src={item}
                                className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img-responsive"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeContent;