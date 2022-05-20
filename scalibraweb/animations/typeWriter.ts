import { RefObject, useRef } from "react";

let i = 0;
let seconds = 60;
let local_ref: any= null;

export function typeWriter(ref: RefObject<HTMLHeadingElement>) {
    var text = 'Vi kvalitetssikrer deg';
    if (i < text.length) {
        if (i === 0) {
            local_ref = ref;
        }
        if (local_ref.current !== null) {
            local_ref.current.innerHTML += text[i];
            i ++;
            setTimeout(typeWriter, seconds);
        }
    }
}