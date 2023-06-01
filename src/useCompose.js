import {compose} from "redux";

const useCompose = () => {
    const makeLoader = string => string.toUpperCase();
    const repeatThreeTimes = string => string.repeat(3);
    const embolden = string => string.bold();

    // const makeLouderRepeatThreeTimesAndEmbolden = string => embolden(repeatThreeTimes(makeLoader(string)));
    // OR
    const makeLouderRepeatThreeTimesAndEmbolden = compose(makeLoader, repeatThreeTimes, embolden);

    console.log(makeLouderRepeatThreeTimesAndEmbolden('Hello'));
}

export default useCompose;