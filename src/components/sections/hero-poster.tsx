const nodes = [
  [120, 300],
  [210, 190],
  [210, 420],
  [320, 120],
  [330, 300],
  [330, 480],
  [450, 200],
  [450, 390],
  [540, 300],
  [400, 60],
  [90, 160],
  [500, 500],
] as const;

const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [2, 5],
  [3, 6],
  [4, 6],
  [4, 7],
  [5, 7],
  [6, 8],
  [7, 8],
  [3, 9],
  [0, 10],
  [7, 11],
] as const;

// "Threads" entering from the left and converging into the network
const threads = [
  "M-40 120 C 40 150, 70 270, 120 300",
  "M-40 260 C 30 270, 80 290, 120 300",
  "M-40 430 C 40 400, 80 330, 120 300",
  "M-40 540 C 60 500, 160 440, 210 420",
];

export function HeroPoster() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-30 lg:w-[62%] lg:opacity-80"
    >
      <svg
        viewBox="0 0 600 600"
        preserveAspectRatio="xMaxYMid meet"
        className="h-full w-full"
        fill="none"
      >
        {threads.map((d) => (
          <path key={d} d={d} className="stroke-accent-500" strokeOpacity={0.35} strokeWidth={1} />
        ))}
        {edges.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            className="stroke-accent-500"
            strokeOpacity={0.45}
            strokeWidth={1}
          />
        ))}
        {nodes.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={10} className="fill-accent-500" fillOpacity={0.12} />
            <circle cx={x} cy={y} r={3.5} className="fill-accent-300" />
          </g>
        ))}
      </svg>
    </div>
  );
}
