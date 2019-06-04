export default function loadScript(src: string, position: Element) {
    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.src = src;
    position.appendChild(script);
  
    return script;
  }