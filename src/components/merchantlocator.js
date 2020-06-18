const userid = 'K98T31PFE8R2BXBR0ZL221_enTQYwBBmsGO-2CBuQQoHl8abA';
const password = 'w1tlLQDfNq9KXGr65'

export async function getMerchantLocator(){
    try{
        let locator = await fetch('https://sandbox.api.visa.com/merchantlocator/v1/locator',
            {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    Accept: 'application/json',
                    Authorization: {userid, password}
                }

            }
        );

        let result = await locator.json();
        locator = null;

        return result.locator;
    }catch(e){
        console.log('error', e);
    }
}