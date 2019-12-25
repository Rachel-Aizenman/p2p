import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, PieChart, Pie, Legend,
} from 'recharts';

export default class Example extends PureComponent {
  static jsfiddleUrl = '//jsfiddle.net/alidingling/6okmehja/';

  render() {
    const data=this.props.data
    console.log(data)
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
