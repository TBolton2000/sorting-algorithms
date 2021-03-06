/**
 * SELECTION SORT
 * 
 * 
 * 
 * 
 */
async function selectionSort() {
    console.log("Running selection sort");
    interupter = false;
    showArrows = true;
    for(i = 0 ; i < N ; i++) {
        if(interupter) {
            return;
        }
        minIndex = i;
        for(j = i ; j < N; j++) {
            if(numbers[minIndex] > numbers[j]) {
                minIndex = j;
            }
            await sleep(100/speed);
        }
        [numbers[i],numbers[minIndex]] = [numbers[minIndex],numbers[i]];
    }
    showArrows = false;
}

function stepSelectionSort(){
    showArrows = true;
    if(i == N) {
        i = -1;
        showArrows = false;
    }
    if(j == N) {
        [numbers[i],numbers[minIndex]] = [numbers[minIndex],numbers[i]];
        i++;
        j = i;
        minIndex = i;
    }
    if(numbers[minIndex] > numbers[j]) {
        minIndex = j;
    }
    j++;
    console.log("Stepped");
}


/**
 * INSERTION SORT
 * 
 * 
 * 
 * 
 */
async function insertionSort() {
    console.log("Running insertion sort");
    let interupter = false;
    showArrows = true;
    for(i = 1; i < N; i ++) {
        if(interupter) {
            return;
        }
        minIndex = i;
        let key = numbers[i];
        j = i - 1;
        while(j >= 0 && numbers[j] > key) {
            numbers[j+1] = numbers[j];
            j = j -1;
            await sleep(100/speed);
        }
        numbers[j + 1] = key;
    }
    showArrows = false;
}

function stepInsertionSort() {

}