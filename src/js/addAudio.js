export const addAudio = path => {
    const audio = new Audio(path);
    audio.play();
}