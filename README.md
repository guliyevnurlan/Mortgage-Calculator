
# Mortgage Applications

You have been asked to develop a piece of software for a building society offering a range of different low-cost mortgages. You will be building a [mortgage calculator](https://www.mortgagecalculator.uk).

---

## Testing

You are required to create the following accounts to allow the system to be tested. All accounts should have the password `p455w0rd`:

1. `customer1`
2. `customer2`
3. `customer3`

---

## Feature 1

The first part of the project is to develop a mortgage calculator tool to allow prospective `customers` to figure out which mortgage deal to apply for. Assume a compound interest rate of 3%.

After logging in the user should see an **Add option** button on the _homepage_ which takes them to an interactive screen that calculates a new mortgage option. When complete they click the **Add** button that stores the new option and returns them to the home screen. They should be asked for the following:

1. A slider to capture the amount they plan to borrow in pounds sterling (rounded up) (range £50-800K.
2. A slider to capture the deposit they plan to make in pounds sterling (rounded up) (range £5-300K).
3. A slider to capture the number of years the mortgage will run for (range 5-30). 

As the user moves the sliders they should be able to see the values of these and the page should also display in real-time:

1. The monthly payment required.
2. The total amount that will be paid over the mortgage duration.

All this data needs to be saved to the server database.

> To demonstrate this feature and to prove that the form works correctly you will need to show that the data is being persisted correctly, either by running a database query or an API call depending on the platform and technology you are using.

## Feature 2

The hone screen shound list the various options the **currently logged in user** has been exploring. Each option should include the following information:

1. The amount they plan to borrow in pounds sterling (rounded up).
2. The deposit they plan to make in pounds sterling (rounded up).
3. The number of years the mortgage will run for.
4. The minimum monthly payment required.
5. The total amount that will be paid (including capital and compound interest) over the duration of the mortgage.

## Feature 3

Mortgage interest rates vary depending on the level of deposit provided.

Modify the calculations by using different interest rates depending on the size of the deposit:

1. under 5% deposits are not permitted.
2. 5-9% deposit uses interest rate of 6%.
3. 10-20% deposit uses interest rate of 4%.
4. 21-30% deposit uses interest rate of 3%.
5. 31%+ deposit uses interest rate of 2.3%.

The currently applicable rate should be clearly visible on the screen.

There should be a **Delete** button or link next to each option allowing the user to delete the options that are no longer of interest.

## Feature 4

2. The home screen should have a button labelled **Financial data** which takes the user to a screen where they can establish how large a monthly payment they can afford. This data should be saved in their profile. This should ask for:
    1. Their average monthly take home wage.
    2. Fixed monthly outgoings excluding rent or mortgage.
    3. Current monthly rental cost or mortgage.
    4. How much of their wage is currently left at the end of a typical month.
    5. The amount they want to borrow (this becomes the default value when they add options).
    6. The size of their deposit (this becomes the default value when they add options).
3. The morgage calculator developed in stage 1 should now be modified to set a cap on the monthly payments based on the factors above. The page should clearly explain how this was calculated.
