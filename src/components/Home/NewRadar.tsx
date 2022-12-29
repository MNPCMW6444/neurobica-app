import axios from "axios";
import { useEffect, useState } from "react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { TypoYoad } from "../../TypoYoad";
import domain from "../../util/domain";

export default function NewRadar({}: any) {
  const [memory, setMemory] = useState([]);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const getMemory = async () => {
      try {
        const scores = await axios.get(domain + "memory/getScores");
        setMemory(scores.data.map((r: any) => r.result));
      } catch (e) {}
    };
    getMemory();
    const getResponse = async () => {
      try {
        const scores = await axios.get(domain + "response/getScores");
        setResponse(scores.data.map((r: any) => r.result));
      } catch (e) {}
    };
    getResponse();
  }, []);

  const numberOfTests = Math.min(
    memory ? memory.length || 0 : 0,
    response ? response.length || 0 : 0
  );

  if (numberOfTests) {
    let data: any = [
      {
        subject: "Attention",
      },
      {
        subject: "Memory",
      },
      {
        subject: "Response Time",
      },
    ];

    for (let i = 0; i < numberOfTests; i++) {
      data[1][("Test" + i) as keyof any] = memory[i];
      data[0][("Test" + i) as keyof any] = response[i];
      data[2][("Test" + i) as keyof any] = response[i];
    }

    console.log(data);

    return (
      <ResponsiveContainer width="100%" aspect={2} height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis fontSize={10} dataKey="subject" />
          <PolarRadiusAxis fontSize={10} angle={90} domain={[0, 100]} />
          <Radar
            name="Last Test"
            dataKey="Test1"
            stroke="#FF8B17"
            fill="#FF8B17"
            fillOpacity={0.2}
          />
          <Radar
            name="The One Before The Last Test"
            dataKey="Test2"
            stroke="#6E896A"
            fill="#6E896A"
            fillOpacity={0.2}
          />
          <Radar
            name="Tragedy"
            dataKey="C"
            stroke="#1E89FA"
            fill="#1E89FA"
            fillOpacity={0.2}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    );
  } else return <TypoYoad>Loading... or maybe you didnt do any test</TypoYoad>;
}
