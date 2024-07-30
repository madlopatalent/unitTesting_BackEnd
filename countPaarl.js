export default function countAllPaarl(regNoString) {
    const regNoOfPaarl = regNoString.split(',');
    let paarl_count = 0;
    for (let i = 0; i < regNoOfPaarl.length; i++) {
        if (regNoOfPaarl[i].trim().startsWith("CJ")) {
            paarl_count += 1;
        }
    }
    return paarl_count;
}