export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json({
    items: [
      { label: "for parents", page: "about" },
      { label: "for coaches", page: "about" },
      { label: "contact us", page: "about" },
      { label: "latest news", page: "home" },
      { label: "register now", page: "programs" }
    ]
  });
}