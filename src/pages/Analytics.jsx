import React from 'react';
import { FaChartPie, FaChartLine, FaMapMarkerAlt } from 'react-icons/fa';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import '../styles/analytics.css';

const pieChartData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];

const lineChartData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
];

const revenueData = [
  { name: 'Jan', revenue: 4000, expenses: 2400 },
  { name: 'Feb', revenue: 3000, expenses: 1398 },
  { name: 'Mar', revenue: 2000, expenses: 9800 },
  { name: 'Apr', revenue: 2780, expenses: 3908 },
  { name: 'May', revenue: 1890, expenses: 4800 },
  { name: 'Jun', revenue: 2390, expenses: 3800 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const markers = [
  { markerOffset: -15, name: "New York", coordinates: [-74.006, 40.7128] },
  { markerOffset: -15, name: "London", coordinates: [-0.1276, 51.5074] },
  { markerOffset: -15, name: "Tokyo", coordinates: [139.6503, 35.6762] },
];

const Analytics = () => {
  return (
    <div className="analytics-page">
      <h1>Analytics Dashboard</h1>
      
      <div className="analytics-grid">
        <div className="analytics-card pie-chart">
          <h2><FaChartPie /> Pie Chart</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="analytics-card donut-chart">
          <h2><FaChartPie /> Donut Chart</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="analytics-card line-chart">
          <h2><FaChartLine /> Chart Order</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="analytics-card total-revenue">
          <h2><FaChartLine /> Total Revenue</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
              <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="analytics-card customer-map">
          <h2><FaMapMarkerAlt /> Customer Map</h2>
          <ComposableMap>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#EAEAEC"
                    stroke="#D6D6DA"
                  />
                ))
              }
            </Geographies>
            {markers.map(({ name, coordinates, markerOffset }) => (
              <Marker key={name} coordinates={coordinates}>
                <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
                <text
                  textAnchor="middle"
                  y={markerOffset}
                  style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                >
                  {name}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>
    </div>
  );
};

export default Analytics;