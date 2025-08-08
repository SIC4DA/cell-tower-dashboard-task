import { useEffect, useRef } from "react";
import * as d3 from "d3";
import type { CellTower } from "@/types/tower";

interface BarChartProps {
  towers: CellTower[];
  width?: number;
  height?: number;
}

const BarChart = ({ towers, width = 320, height = 240 }: BarChartProps) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!towers.length) return;

    const cityCounts: Record<string, number> = {};
    towers.forEach((t) => {
      cityCounts[t.city] = (cityCounts[t.city] || 0) + 1;
    });
    const data = Object.entries(cityCounts).map(([city, count]) => ({
      city,
      count,
    }));

    const margin = { top: 20, right: 20, bottom: 50, left: 40 };

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const x = d3
      .scaleBand<string>()
      .domain(data.map((d) => d.city))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.count) || 0])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg
      .append("g")
      .attr("fill", "var(--color-primary, #3b82f6)")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d) => x(d.city)!)
      .attr("y", (d) => y(d.count))
      .attr("height", (d) => y(0) - y(d.count))
      .attr("width", x.bandwidth());

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("font-size", "9px")
      .attr("dy", "0.35em")
      .attr("dx", "-0.6em")
      .attr("transform", "rotate(-40)")
      .style("text-anchor", "end");

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).ticks(5));
  }, [towers, width, height]);

  return (
    <svg
      ref={ref}
      width={width}
      height={height}
      style={{ width: "unset", margin: "0 auto", display: "block" }}
    />
  );
};

export default BarChart;
