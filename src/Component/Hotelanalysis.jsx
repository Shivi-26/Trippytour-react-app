import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Hotelanalysis = () => {
    const [data, setData] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        fetch('http://localhost:5000/api/data')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error('Data fetch error:', error);
            });
    }, []);

    return (
        <>
            <div style={{backgroundColor: '#153B62'}}>
                <h1>Hotel Booking Dashboard</h1>
            </div>
            <div className="container-fluid">
                <div className="card" style={{ background: '#153B62', marginBottom: '20px', borderRadius: '0' }}>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="mb-4">
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                            </div>
                            <div className="card" style={{ background: '#f5f5f5', marginBottom: '20px', borderRadius: '0' }}>
                                <h5 className="card-title text-center text-light" style={{ background: '#153B62'}}>Number of Visitors per Day</h5>
                                <Chart
                                    options={{
                                        chart: {
                                            id: "line-chart",
                                            toolbar: {
                                                show: false
                                            }
                                        },
                                        xaxis: {
                                            categories: data.map((item) => `${item.arrival_date_month}-${item.arrival_date_day_of_month}`)
                                        },
                                        stroke: {
                                            curve: 'smooth'
                                        },
                                        markers: {
                                            size: 6
                                        },

                                    }}
                                    series={[
                                        {
                                            name: "Number of Visitors",
                                            data: data.map((item) => item.adults + item.children + item.babies)
                                        }
                                    ]}
                                    type="line"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card mt-5" style={{ background: '#f5f5f5', marginBottom: '20px', borderRadius: '0' }}>
                                <h5 className="card-title text-center text-light" style={{ background: '#153B62'}}>Number of Visitors per Country</h5>
                                <Chart
                                    options={{
                                        chart: {
                                            id: "pie-chart",
                                            toolbar: {
                                                show: false
                                            }
                                        },
                                        xaxis: {
                                            categories: data.map((item) => item.country),
                                            labels: {
                                                rotate: -45
                                            }
                                        },
                                        plotOptions: {
                                            bar: {
                                                horizontal: false
                                            }
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                    }}
                                    series={[
                                        {
                                            name: "Number of Visitors",
                                            data: data.map((item) => item.adults + item.children + item.babies)
                                        }
                                    ]}
                                    type="bar"
                                    width={500}
                                    height={300}
                                />

                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="card" style={{ background: '#f5f5f5', marginBottom: '20px', borderRadius: '0' }}>
                                <h5 className="card-title text-center text-light" style={{ background: '#153B62'}}>Total Number of Adult Visitors</h5>
                                <Chart
                                    options={{
                                        chart: {
                                            id: "sparkline-1",
                                            sparkline: {
                                                enabled: true
                                            }
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        stroke: {
                                            curve: 'smooth',
                                            width: 2
                                        },
                                        markers: {
                                            size: 0
                                        }
                                    }}
                                    series={[
                                        {
                                            name: "Total Adults",
                                            data: data.map((item) => item.adults)
                                        }
                                    ]}
                                    type="line"
                                    width={200}
                                    height={100}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card" style={{ background: '#f5f5f5', marginBottom: '20px', borderRadius: '0' }}>
                                <h5 className="card-title text-center text-light" style={{ background: '#153B62'}}>Total Number of Children Visitors</h5>
                                <Chart
                                    options={{
                                        chart: {
                                            id: "sparkline-2",
                                            sparkline: {
                                                enabled: true
                                            }
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        stroke: {
                                            curve: 'smooth',
                                            width: 2
                                        },
                                        markers: {
                                            size: 0
                                        }
                                    }}
                                    series={[
                                        {
                                            name: "Total Children",
                                            data: data.map((item) => item.children)
                                        }
                                    ]}
                                    type="line"
                                    width={200}
                                    height={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hotelanalysis;