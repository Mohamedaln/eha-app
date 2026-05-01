export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json({
    games: [
      { date1: "May 2, 2026", time1: "10:00am", home1: "EHA Eagles", away1: "Penn Hoops", loc1: "Rec Hall Court A", div1: "14U" },
      { date1: "May 9, 2026", time1: "12:00pm", home1: "EHA Lions", away1: "State Ballers", loc1: "Bryce Jordan Center", div1: "12U" },
      { date1: "May 16, 2026", time1: "9:00am", home1: "EHA Warriors", away1: "Centre County Hoops", loc1: "Rec Hall Court B", div1: "10U" },
      { date1: "May 23, 2026", time1: "2:00pm", home1: "EHA Eagles", away1: "Altoona Elite", loc1: "Rec Hall Court A", div1: "14U" },
      { date1: "May 30, 2026", time1: "11:00am", home1: "EHA Juniors", away1: "Happy Valley Hoops", loc1: "IM Building Court 1", div1: "8U" },
      { date1: "June 6, 2026", time1: "1:00pm", home1: "EHA Lions", away1: "Bellefonte Ballers", loc1: "Rec Hall Court A", div1: "18U" }
    ]
  });
}