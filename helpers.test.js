describe("Utilities test (with setup and tear-down)", function() {
    beforeEach(function(){
      billAmtInput.value=100;
      tipAmtInput.value=20;
      submitPaymentInfo();
    })
    });
  
    it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 25;
      submitPaymentInfo();
      
      expect(sumPaymentTotal('tipAmt')).toEqual(25);
  });
  
  
    it('should sum total bill amount of all payments on sumPaymentTotal()', function () {
     billAmtInput.value=100;
     tipAmtInput.value=20;
    submitPaymentInfo();
    expect(sumPaymentTotal('billAmt')).toEqual(100);
    });
  
    it('should sum total tip percent on sumPaymentTotal()', function () {
     billAmtInput.value=100;
     tipAmtInput.value=20;
    submitPaymentInfo();
    expect(sumPaymentTotal('tipPercent')).toEqual(20)
    });
  
    it('should sum tip percent of a single tip on calculateTipPercent()', function () {
      expect(calculateTipPercent(100,20)).toEqual(20);
    });
  
    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
      let newTr=document.createElement('tr');
      appendDeleteBtn(newTr);
      expect(newTr.children.length).toEqual(1);
     expect(newTr.firstChild.innerHTML).toEqual('X');
    });
  
    it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
      let newTr=document.createElement('tr');
      appendTd(newTr,'test');
      expect(newTr.children.length).toEqual(1);
     expect(newTr.firstChild.innerHTML).toEqual('test');
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