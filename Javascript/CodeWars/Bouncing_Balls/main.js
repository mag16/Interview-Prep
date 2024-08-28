/* 
A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:

- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).
*/

function bouncingBall(h,  bounce,  window) {
    // your code here
    if((h > 0) && (bounce > 0 && bounce < 1) && (window < h)) {
      let count = 0;
      while (h > window) {
        count++; // Falling down
        h *= bounce; // Ball bounces to a new height
        if (h > window) {
          count++; // Bouncing up
        }
      }
      return count;
      
    } else {
      return -1;
    }
  }

  /* 
Problem Recap:
In this kata, you need to determine how many times a ball will pass by a window after being dropped from a height h, bouncing with a bounce factor bounce, and with the window positioned at height window.

Steps to Solve:
Initial Drop:

The ball is dropped from height h and falls past the window for the first time.
Subsequent Bounces:

After the ball hits the ground, it bounces back up to h * bounce.
If this height is still above the window, the ball will pass the window again (upwards and then downwards).
Counting Passes:

Each time the ball passes the window (both on the way down and after a bounce), you count it.
Pseudocode:
Initial Check:

Ensure the conditions are met: h > 0, 0 < bounce < 1, and window < h.
If not, return -1.
Count Passes:

Initialize a counter for the number of passes.
While the height after bouncing is greater than the window height, increment the counter twice (once for falling down, once for bouncing up).

*/
