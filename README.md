# backend-phone-catalog-app  

## API work description:  

### Find an image:  
*Requires:*  
**Phone ID**  
**Two-digit number of image**  
*Responds:*  
**Image in Base64 scheme**  
*Exapmle:*  
- [Git image](https://hope-it-works.netlify.app/.netlify/functions/server/public/34/02)  

### Find one phone:  
*Requires:*  
**phoneID**  
*Responds:*  
**Phone object**  
- [Get phone](https://hope-it-works.netlify.app/.netlify/functions/server/phones/34)  

### Get the phone list:  
*Requires:*  
**sortedBy parameter**  
SortBy = 'newest' | 'alphabetically' | 'price_cheap' | 'price_expensive' | 'capacity' | 'ram' | 'screen'  
**Number of page**  
**number of phones per page**  
*Responds:*  
**Object as:**  
{  
  paginatedPhones,  
  page,  
  totalPages,  
  totalPhones,  
};  
*Exapmle:*  
- [Get phones list](https://hope-it-works.netlify.app/.netlify/functions/server/phones?sortedby=price_expensive&page=1&phonesQuantity=1)  

