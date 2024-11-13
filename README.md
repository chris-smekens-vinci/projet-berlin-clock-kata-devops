# projet-berlin-clock-kata-devops

# group 9

## Members of group 9

- Chris Smekens
- Alexandre Nestoridis

The two members of the group are working together to complete this project using the TDD method.

## Project description

This project aims to create a Berlin clock. This clock displays the time using lamps that can be either on or off. It visually represents the hours, minutes, and seconds, which is different from digital clocks.
The goal is to convert a digital time into the “Berlin clock” format. The project is carried out in several steps, using pair programming and test-driven development (TDD).

### Clock specifications

1. **The second’s lamp** :
   - A large bulb at the top of the clock.
   - It is on for even seconds and off for odd seconds.

2. **The hour lines** :
   - **First line** : Displays the 5-hour blocks, with 4 red lamps.
   - **Second line**: Displays the individual hours, with 4 red lamps.

3. **The minute lines** :
   - **Top line** : Displays the 5-minute blocks, with 11 lamps.
   - Every 3rd lamp is red, and the others are yellow.
   - **Bottom line** : Displays the individual minutes, with 4 yellow lamps.

### Implementation Steps
1.	Implement the line for individual minutes.
2.	Implement the line for 5-minute blocks.
3.	Implement the line for individual hours.
4.	Implement the line for 5-hour blocks.
5.	Implement the second’s lamp.
6.	Integrate the entire clock.

Each step is accompanied by unit tests to ensure that each part works correctly. This project provides an opportunity to practice TDD and pair programming, which are often required in job interviews.