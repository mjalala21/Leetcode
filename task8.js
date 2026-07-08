var isPalindrome = function(s) {
    
    let str="";
    for(letter of s){
        if(/[a-zA-Z0-9]/.test(letter))
        {
          str+=letter
        }
    }
    let str2=str.toLowerCase()
    let palindrome=str2.split("").reverse().join("")
    if(str2===palindrome){
        return true;
        }
    else{
        return false
    
    }
  
    

};
console.log(isPalindrome(" "))

// interview solution is /

var isPalindrome = function(s) {
    let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");//^ means not include, g means all occurance

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};