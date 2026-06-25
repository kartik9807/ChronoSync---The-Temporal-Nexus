export const CLEARANCE_STYLES = {
  LEVEL_1: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
  LEVEL_2: "bg-blue-500/20 border-blue-500/20 text-blue-300",
  LEVEL_3: "bg-purple-500/10 border-purple-500/20 text-purple-300",
  LEVEL_4: "bg-amber-500/10 border-amber-500/20 text-amber-300",
  LEVEL_5: "bg-red-500/10 border-red-500/20 text-red-300",
};

export function getCardBorder(ts) {
  const diff = ts - Date.now();
  if (diff < 3600000) return "border-l-red-500/50 ";
  if (diff < 86400000) return "border-l-amber-500/50";
  return "border-l-cyan-500/50";
}

export function getExpiryInfo(ts,time) {
    const diff = ts - time;
    if (diff < 0) return { label: "EXPIRED", style: "bg-red-500/10 border-red-500/20 text-red-400" };
    const h = Math.floor(diff / 3600000);
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    if(h<1) return {label: `EXPIRES IN ${minutes}:${String(seconds).padStart(2,'0')}`,style: "bg-red-500/10 border-red-500/20 text-red-400"}
    else if (h < 48) return { label: `EXPIRES IN ${h}H`, style: "bg-amber-500/10 border-amber-500/20 text-amber-300" };
    const d = Math.floor(diff / 86400000);
    return { label: `EXP ${new Date(ts).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`, style: null };
  }