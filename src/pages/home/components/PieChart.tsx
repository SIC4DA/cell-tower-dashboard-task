import { useEffect, useRef } from "react";
import * as d3 from "d3";
import type { CellTower } from "@/types/tower";

interface PieChartProps {
  towers: CellTower[];
  size?: number; // diameter
}

const PieChart = ({ towers, size = 240 }: PieChartProps) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!towers.length) return;

    const active = towers.filter((t) => t.status === "active").length;
    const offline = towers.length - active;

    const data = [
      { label: "Active", value: active },
      { label: "Offline", value: offline },
    ];

    const width = size;
    const height = size;
    const radius = size / 2;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const color = d3
      .scaleOrdinal<string>()
      .domain(data.map((d) => d.label))
      .range(["#16a34a", "#ef4444"]);

    const pie = d3
      .pie<{ label: string; value: number }>()
      .value((d) => d.value)
      .sort(null);

    const arc = d3
      .arc<d3.PieArcDatum<{ label: string; value: number }>>()
      .innerRadius(0)
      .outerRadius(radius);

    g.selectAll("path")
      .data(pie(data))
      .enter()
      .append("path")
      .attr("d", arc as any)
      .attr("fill", (d) => color(d.data.label) as string);

    
    const legendSpacing = 18;
    const legend = svg
      .append("g")
      .attr("transform", `translate(-55px, -20px)`);

    legend
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (_, i) => i * legendSpacing)
      .attr("width", 12)
      .attr("height", 12)
      .attr("fill", (d) => color(d.label) as string);

    legend
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", 18)
      .attr("y", (_, i) => i * legendSpacing + 10)
      .text((d) => `${d.label} (${d.value})`)
      .attr("font-size", "11px")
      .attr("dominant-baseline", "middle");
  }, [towers, size]);

  return <svg ref={ref} width={size} height={size} style={{ margin: "0 auto", display: "block", width: "unset" }} />;
};

export default PieChart;
