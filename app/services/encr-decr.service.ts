import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EncrDecrService {


/*
var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'opU34TT8933thj{o[|sddchUValGwl2j').toString();
 
// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
 
console.log(decryptedData); // [{id: 1}, {id: 2}]
*/


  constructor() { }

  test(){

    var dedata="wnnbTohSR8zn8VMbdz4Jnffnpgqp9/4q/pJq9TjUfT/0upXTctku72wkNR5QYhTctbmwYXK0WDgUDvNYOqrSvvZAr5CQNzigAsxMPptu9306k5uTwIHV+9EU/p4CH000K3f7Sz8hv6cBRLaFxOKM9GNJI/avn828iCqkG7fJ+ml5bXi5cllz+kh7C0vtinqKjJykF7q1glyRX8pko6F9fZwtKb0sI5ADYnN84uWPFSr+mnyFdFOcSu2mAtQt2N/d4wChe0AwG/ibgHf1v400bXzYIOzWAAY8IHxbEsLu26bli1ONpV5TO5Wdn6w5EDTzCeGhHG7Clxxin2HoRZzfeRwrCYKyiuP7Q8SiwpMDaIM1Bupffmyq2uefQU5IDYtGFiPku6v58kDXboTbmp057h6zJjLk/XZeBsU8WdXKDV0bM86yej4Ja9mvjgoLvQx1OopGS9xlWqKFed5U9hD7GQ8yEL1Ch3GyiEPI2pCSvU7ZLJ+xeFEShAiJvS5Yu8X1hus/fAPkKeo4gkDLDm57vpXtoUsPKOd4qrlL5fiJSRKy1VWRV35tf20HDNgXicIBFUsO3SXgwn3tEWKiszaFIG/UPqdFweNOAXD0RtNVyBG5EraaHfVsMVHrfFPz8cYDymOEcsaTbRzWahN0Vcr2o9Q3u3d5uLUSsjnNTUgQbhC3oP9WONDnkGORIvuPdVY+t6eYnUuiccAE8NGj78YcTN3vTDJ7W9FNKyZKBts1I0IJIIcgXwJ6mAmXPXyUJ+0BSEwHLYyulkcp+paadMOCgccShlE34GyiHVBAH7yLaofOEYQBpy2q+KY8gG9iBFlWAlCzXOLrlQ+/e7pr4ACr6jDmCb2LCYxIHJ3IbfTvIq91XlsdNdP8fCvrTLV/sWHNW5CbSXyaNvFgEhRinmMs2ooJbo28YFF0k+XvQpvmFM0QZQVLPOIGFA5YmxfBhhmZvAYtyxH2Ufl+4WBc0Syv2g==";
    var eddata="wnnbTohSR8zn8VMbdz4Jnffnpgqp9_4q_pJq9TjUfT_0upXTctku72wkNR5QYhTctbmwYXK0WDgUDvNYOqrSvvZAr5CQNzigAsxMPptu9306k5uTwIHV-9EU_p4CH000K3f7Sz8hv6cBRLaFxOKM9NE1d3K2pQOhvsmuGu-2JG_7H9citXZHRo1mxOpvOqClZjYdaCOk_blHFxFNExCCeaOsuDhEIPxx6YVC2ty0MKPyOZqpWOqY5DYrwBzqz3fcvU06TaUxWa4eUzQ85Pm7-aA6mpRoTVVtxEOh7c0lwvhI0c59DOMJ_O1-MHrz0zMf6fu7lVi4P2c-AZZyfwpxFc4hNWgkhca8WESOy58QQHoHTcvTVEp5guUTiJa6dQsDfd9-GN79qC0L5oEEpxkDzRAr7wxE3iRqs4H-G9jNuvMmb2p8szSdX68aBSXSr86UhkRVPs1yFtWUFpFVgRueQvTpQmtnfRu4v5paxML9quA_XsOvRqFHuDYvvixTbcEvej4uEDOpwsyqG73Br7wAJNhiSFGPLQkQyokzXxE2_YgILv4WjGLUf4BYbFqTJGDW5y-48vbz5i9J92lLxIYw8srcdKGK1EKZtSbO98deNJm-LfRKGh99k90dHvJBf0YrYG-Izid8QkChxQnesSMIjWPBvFaXX__exqcfqLxAzfCBR1Q3tG5TsZKtootsFQiI3W6HP7rnLjX26-TpUYuYohWWDZNaUo1ql5IW5nvnecenB-lqMqwPL6SgKVRGTeVxbPiWe7Ja9oCChPy1YHoPC1g8q-p6vW0y1_v2ELILIQNmI4rL4tXAohiLiQfLUJwNW24KHSoXITEZ0d1aV0X5C4Mik2anSTEgaYZMdSReYEwekirqtX-1vuMKa3x4V9RMOxOQ6M2Teg6NJeD57C7-dF8aeTH2QUnVGyKYVYm9MBe6ucJ9HEuq9cs2emk5uVY1YWKZEK1wi4V_LS86zSbuC7kf7Vl_I373BcUB7CxvzY01";
    var data = {"ID":144167,"Name":"PROMIS Physical Function","LowScoreBetter":false,"Ranges":[{"Description":"severe","Lowerbound":10.0,"UpperBound":30.0},{"Description":"moderate","Lowerbound":30.0,"UpperBound":40.0},{"Description":"mild","Lowerbound":40.0,"UpperBound":45.0},{"Description":"within normal limits","Lowerbound":45.0,"UpperBound":90.0}],"Scores":[{"Date":"2019-09-17","Value":25.3,"Interpretation":"severe","Trend":0},{"Date":"2019-09-28","Value":53.0,"Interpretation":"within normal limits","Trend":1},{"Date":"2019-11-19","Value":47.7,"Interpretation":"within normal limits","Trend":0},{"Date":"2019-12-05","Value":40.0,"Interpretation":"moderate","Trend":-1},{"Date":"2020-01-22","Value":52.0,"Interpretation":"within normal limits","Trend":1}]}


    var key = CryptoJS.enc.Utf8.parse("opU34TT8933thj{o[|sddchUValGwl2j");
    var iv = CryptoJS.enc.Utf8.parse("$y2u((Ehp2r^qO{B");

    // var key = CryptoJS.enc.Hex.parse("opU34TT8933thj{o[|sddchUValGwl2j");
    // var iv = CryptoJS.enc.Hex.parse("$y2u((Ehp2r^qO{B");

    // var parsedWordArray = CryptoJS.enc.Base64.parse(eddata);
    // var parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
    // console.log(parsedStr);

    
    var rawStr = "Hello";
    var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
    var base64 = CryptoJS.enc.Base64.stringify(wordArray);
    console.log('encrypted:', base64);
    
    var parsedWordArray = CryptoJS.enc.Base64.parse(base64);
    var parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
    console.log("parsed:",parsedStr);
    //SGVsbG81
    //SGVsbG8=

    var encrypted = CryptoJS.AES.encrypt( JSON.stringify(data), key,{iv: iv});

    console.log(encrypted.toString());

    var dencrypted = CryptoJS.AES.decrypt(encrypted.toString(), key,{iv: iv});

    
    console.log(JSON.parse(dencrypted.toString(CryptoJS.enc.Utf8)));
    // var parsedWordArray2 = CryptoJS.enc.Base64.parse(dencrypted);
    // var parsedStr = parsedWordArray2.toString(CryptoJS.enc.Utf8);
    // console.log(parsedStr);
   
  }

  //The set method is use for encrypt the value.
  set(value){


    var key = CryptoJS.enc.Utf8.parse(environment.keys);
    var iv = CryptoJS.enc.Utf8.parse(environment.keys);
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
    {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
  }

  //The get method is use for decrypt the value.
  get(value){
    var key = CryptoJS.enc.Utf8.parse(environment.keys);
    var iv = CryptoJS.enc.Utf8.parse(environment.keys);
    var decrypted = CryptoJS.AES.decrypt(value, key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }  

}
