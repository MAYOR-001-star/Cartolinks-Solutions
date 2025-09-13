const features = [
  { name: "Image", icon: "🖼️" },
  { name: "Video", icon: "🎥" },
  { name: "Realtime", icon: "⚡" },
  { name: "Text", icon: "✍️" },
  { name: "Enhancer", icon: "✨" },
  { name: "3D", icon: "📐" },
];

export default function Features() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 py-8">
      {features.map((f, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center p-4 border rounded-xl shadow-sm hover:shadow-lg transition"
        >
          <span className="text-3xl">{f.icon}</span>
          <p className="mt-2 text-sm font-medium">{f.name}</p>
        </div>
      ))}
    </div>
  );
}
