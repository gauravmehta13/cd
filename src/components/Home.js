import React, { Component, useEffect, useState } from "react";
import { API } from "aws-amplify";
import "./Home.css";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  TextField,
  Checkbox,
  Grid,
  Card,
  Button,
  IconButton,
  Divider,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { PureComponent } from "react";
import { Sector, Cell } from "recharts";
import { PieChart, Pie } from "recharts";

const data = [
  { name: "product A", orders: 4 },
  { name: "product B", orders: 3 },
  { name: "product C", orders: 3 },
  { name: "product D", orders: 1 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class Home extends Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/c9pL8k61/";
  render() {
    return (
      <div>
        {/* <div className="widgetWrap">
          <div className="widgetValue">
            <div className="Value">Hello Gaurav</div>
          </div>
        </div> */}
        <div>
          <Card style={{ marginBottom: 10 }}>
            <div>
              <Typography
                style={{
                  borderBottom: `1px solid black`,
                  fontSize: 20,
                  height: 50,
                  padding: 10,
                  paddingLeft: 30,
                  fontWeight: 700,
                }}
                fullWidth
              >
                Order Details
              </Typography>
            </div>
            <Grid container spacing={3} style={{ marginTop: 10 }}>
              <Grid item sm={0.4}></Grid>{" "}
              <Grid item sm={2}>
                <CardContent style={{ paddingTop: 10, paddingBottom: 10 }}>
                  <div class="circle">
                    <h3 style={{ padding: 20, fontSize: 50 }}>20</h3>
                  </div>
                  <div
                    style={{
                      padding: 5,
                      paddingTop: 10,
                      paddingBottom: 0,
                      textAlign: "center",
                      fontWeight: 700,
                    }}
                  >
                    Total Orders placed
                  </div>
                </CardContent>
              </Grid>{" "}
              <Grid item sm={0.4}></Grid>
              <Grid item sm={2}>
                <CardContent style={{ paddingTop: 10, paddingBottom: 10 }}>
                  <div class="circle">
                    <h3 style={{ padding: 20, fontSize: 50 }}>12</h3>
                  </div>
                  <div
                    style={{
                      padding: 5,
                      paddingTop: 10,
                      paddingBottom: 0,
                      textAlign: "center",
                      fontWeight: 700,
                    }}
                  >
                    Orders Accepted
                  </div>
                </CardContent>
              </Grid>{" "}
              <Grid item sm={0.4}></Grid>
              <Grid item sm={2}>
                <CardContent style={{ paddingTop: 10, paddingBottom: 10 }}>
                  <div class="circle">
                    <h3 style={{ padding: 20, fontSize: 50 }}>8</h3>
                  </div>
                  <div
                    style={{
                      padding: 5,
                      paddingTop: 10,
                      paddingBottom: 0,
                      textAlign: "center",
                      fontWeight: 700,
                    }}
                  >
                    Orders Picked up
                  </div>
                </CardContent>
              </Grid>{" "}
              <Grid item sm={0.4}></Grid>
              <Grid item sm={2}>
                <CardContent style={{ paddingTop: 10, paddingBottom: 10 }}>
                  <div class="circle">
                    <h3 style={{ padding: 20, fontSize: 50 }}>5</h3>
                  </div>
                  <div
                    style={{
                      padding: 5,
                      paddingTop: 10,
                      paddingBottom: 0,
                      textAlign: "center",
                      fontWeight: 700,
                    }}
                  >
                    Orders in Transit
                  </div>
                </CardContent>
              </Grid>
              <Grid item sm={0.4}></Grid>
              <Grid item sm={2}>
                <CardContent style={{ paddingTop: 10, paddingBottom: 10 }}>
                  <div class="circle">
                    <h3 style={{ padding: 20, fontSize: 50 }}>2</h3>
                  </div>
                  <div
                    style={{
                      padding: 5,
                      paddingTop: 10,
                      paddingBottom: 0,
                      textAlign: "center",
                      fontWeight: 700,
                    }}
                  >
                    Orders Delivered
                  </div>
                </CardContent>
              </Grid>
              <Grid item sm={0.4}></Grid>
            </Grid>
          </Card>
        </div>
        <div>
          <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid item xs={12} sm={8}>
              <div>
                <Card Style={{ marginBottom: 20 }}>
                  <CardContent>
                    <div
                      style={{
                        padding: 5,
                        paddingTop: 10,
                        paddingBottom: 20,
                        textAlign: "center",
                        fontWeight: 700,
                      }}
                    >
                      Total Products placed
                    </div>

                    <LineChart
                      width={500}
                      height={190}
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />

                      <Line type="monotone" dataKey="orders" stroke="#82ca9d" />
                    </LineChart>
                  </CardContent>
                </Card>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <div
                    style={{
                      padding: 5,
                      paddingTop: 10,
                      paddingBottom: 10,
                      textAlign: "center",
                      fontWeight: 700,
                    }}
                  >
                    Product Types
                  </div>
                  <div>
                    <PieChart width={300} height={200}>
                      <Pie
                        isAnimationActive={false}
                        dataKey="orders"
                        data={data}
                        cx={135}
                        cy={100}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={3} style={{ paddingTop: 10 }}>
            <Grid
              item
              xs={12}
              sm={4}
              style={{
                paddingTop: 10,
                paddingBottom: 0,
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              <Card>
                <CardContent>Total Amount Charged</CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              style={{
                paddingTop: 10,
                paddingBottom: 0,
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              <Card>
                <CardContent> Amount to be paid</CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              style={{
                paddingTop: 10,
                paddingBottom: 0,
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              <Card>
                <CardContent>Upcoming payments to be made</CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;
