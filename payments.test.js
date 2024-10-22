describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
    });
  
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20)
    });
  
    it('should payment update #paymentTable on appendPaymentTable()', function () {
        let curPayment=createCurPayment();
        allPayments['payment1']=curPayment;
        appendPaymentTable(curPayment);
 let currentTdList = document.querySelectorAll('#paymentTable tbody tr td');
 console.log(currentTdList);
    expect(currentTdList.length).toEqual(4); 
    expect(currentTdList[0].innerText).toEqual('$100'); 
    expect(currentTdList[1].innerText).toEqual('$20');
    expect(currentTdList[2].innerText).toEqual('20%');
    expect(currentTdList[3].innerText).toEqual('X');
});
  
    it('should create a new payment on createCurPayment()', function () {
        let expectedPay={
            billAmt:'100',tipAmt:'20',tipPercent:20,
        }
        expect(createCurPayment()).toEqual(expectedPay);
    });
    
    it('should not add a new payment on submitPaymentInfo() with empty input', function () {
        billAmtInput.value='';
        tipAmtInput.value='';
        submitPaymentInfo(),
        expect(Object.keys(allPayments).length).toEqual(0)
    });
  
    it('should not create payment with empty input on createCurPayment()', function () {
        billAmtInput.value='';
        tipAmtInput.value='';
        let curPayment=createCurPayment();
        expect(curPayment).toBeUndefined();
    });
    afterEach(function(){
        billAmtInput.value='';
        tipAmtInput.value='';
        paymentId=0;
        allPayments={};
        paymentTbody.innerHTML='';
        summaryTds[0].innerHTML='';
        summaryTds[1].innerHTML='';
        summaryTds[2].innerHTML='';
        serverTbody.innerHTML="";
        });
});