import { useEffect } from "react";

export default function MirrorMindAgent() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://agent.d-id.com/v1/index.js";
    script.setAttribute("data-name", "did-agent");
    script.setAttribute("data-mode", "fabio");
    script.setAttribute(
      "data-client-key",
      "Z29vZ2xlLW9hdXRoMnwxMTU4NzQyMzg4ODY5MzYxMjMwMjM6R1dIdmFhNHRjanBsT0xnRmZnZDMx"
    );
    script.setAttribute("data-agent-id", "agt_pySexgPa");
    script.setAttribute("data-monitor", "true");

    document.body.appendChild(script);
  }, []);

  return null;
}
