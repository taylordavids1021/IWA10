# IWA10
IWA_10.3: Project Submission IWA10
# The following code revisits a previous exercise.

# However, in this specific example, various South African public holidays are stored as nested sub-objects in a holidays object. Each holiday is assigned a number from 0 to 8 as a unique key identifier.

# Before doing anything, the code should check whether an item has been assigned to the 9 key, if so, it should log the name of the holiday. If nothing has been assigned yet, then the following should be logged:

# ID 9 not created yet

# The team responsible for maintaining this code is in the process of building an app that allows you to update the dates and names of these holidays as stored in the holidays object. The following code is meant to serve as a prototype of how this behaviour might work.

# However, it is important that changes should be reviewed after they are made. Only after reviewing the change should a user decide whether they want to apply it to the current data or cancel the change (keeping the current data as is). To this end, a copied object is used to store the temporary changes that will be applied.

# To test out this functionality, you will have to do the following:

# By default, all holidays start at midnight. However, by accident Christmas was entered as starting at 13:25. You are required to create a version of the Christmas object that has the date set to midnight.
# While you are changing the time when Christmas starts, it is also requested that you change the name from Christmas to X-mas
 
# After applying these changes, you should check whether the new date is earlier than the current date. This will be done by logging true to the console if this is the case, alternatively, it should log false. Given that midnight is before 13:25 the following should be logged to the console:

# New date is earlier: true

# Only if the date is earlier should it apply the change to copied.

# After the above changes have been applied to the temporary object, the user should be alerted to what has been changed before the changes are applied to the holidays object. If a value has not changed it should log false to the console, alternatively, it should log the new value to the console.

# It should log the following:

# ID change: false
# Name change: X-mas
# Date change: 25/12/2023
 

# Several engineers have attempted to fix this bug before to no avail. We hope that you are able to figure out why this is happening.

# After fixing the above issue, you should also output the following to the console:

# The first holiday in the year as date, formatted as DD/MM/YYYY . This means that the match (New Years Day) will look something like 01/01/2030 if the year is 2030
# The last holiday in the year as date, formatted as DD/MM/YYYY . This means that the match (Day of Goodwill) will look something like 26/12/2030 if the year is 2030
# A randomly selected holiday date in the same format as above. Note that each time the code runs a new date should be randomly selected.
 

# Note that the DD/MM/YYYY format requires that single digits be prefixed with 0 characters. In other words, 1/1/2030 should be displayed as 01/01/2030.

# It is recommended that you Google and read up on the following:

# The Math.min and Math.max static methods.
# The new Date() constructor.
# The .getTime() method on dates.
# The .getMonth() , getDate() and .getFullYear() methods on dates.
# The .setHours and .setMinutes methods on dates.
# The .padStart and .padEnd methods on all strings.