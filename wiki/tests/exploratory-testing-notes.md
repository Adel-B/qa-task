
# Exploratory testing session: Some Findings
What to check for :
## Login

- greets with sign in ==> Already registered? 
- links to Forgot your password? ==> #/index.php?controller=password
- require email
- require password
- requires valide username and passwordnavigate to successful login

## Register

- greets ==> Create an account Please enter your email address to create an account.
- require email to start creating an account
- redirect to #/index.php?controller=order if articles in Cart
- redirect to #/index.php?controller=my-account if Cart is empty
- Create account require Your personal information
- ERRORS from BE displayed to the user if mandatory infos are not sent with the request:

    - !!You cannot create a guest account..
    - You must register at least one phone number.
    - lastname is required.
    - firstname is required.
    - !!email is required.
    - passwd is required.
    - !!id_country is required.
    - !!alias is required.
    - address1 is required.
    - city is required.
    - !!Country cannot be loaded with address->id_country
    - !!Country is invalid
    - The Zip/Postal code you've entered is invalid. It must follow this format: 00000
    - This country requires you to choose a State.


- All Body params
   - customer_firstname=
   - customer_lastname=
   - email=
   - passwd=
   - days=
   - months=
   - years=
   - firstname=
   - lastname=
   - company=
   - address1=
   - address2=
   - city=
   - id_state=
   - postcode=
   - id_country=
   - other=
   - phone=
   - phone_mobile=
   - alias=
   - dni=
   - email_create=
   - is_new_customer=
   - back=my-account
   - submitAccount=