
import { useEffect, useState } from "react";

export interface IndexesType {
    stringIndex: number;
    characterIndex: number;
}

export interface TypingUseEffectType {
    values: string[];
    speedy: number;
    rePlay :{ loop: boolean; playBack: number }
}

const useTypingEffect = ({values , speedy, rePlay} : TypingUseEffectType) => {

    let [{stringIndex, characterIndex }, setState] = useState<IndexesType>({stringIndex: 0,characterIndex: 0});
    let timeoutId: number;

    const boardWriting = () => {
        characterIndex++;
        if (characterIndex === values[stringIndex].length) {
          characterIndex = 0;
          stringIndex++;
          if (stringIndex === values.length) {
            if (!rePlay.loop) {
              return;
            }
            stringIndex = 0;
          }
          timeoutId = window.setTimeout(boardWriting, 100 * rePlay.playBack * speedy);
        } else if (characterIndex === values[stringIndex].length - 1) {
          timeoutId = window.setTimeout(boardWriting, 2000 * rePlay.playBack * speedy);
        } else {
          timeoutId = window.setTimeout(boardWriting, 100 * rePlay.playBack * speedy);
        }
        setState({
          characterIndex,
          stringIndex
        });
    }

    useEffect(() => {
        boardWriting();
        return () => {
          window.clearTimeout(timeoutId);
        };
      }, []);

    return values[stringIndex].slice(0, characterIndex + 1) ;


    // useEffect(() => {
    //     setTimeout(() => {
    //         let i = 0;
    //         const interval = setInterval(() => {
    //             setText(prev=>{
    //                 if (i == value.length) {
    //                     setIsFinished(true)
    //                     clearInterval(interval)
    //                     return prev;
    //                 }
    //                 else {
    //                     return prev+value[i++];
    //                 }
    //             })

    //         }, speedy)
    //     }, delay)

    // }, [value])

    // return [text, isFinished]
}

export default useTypingEffect

