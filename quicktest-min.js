function Quicktest(b,d,g){var e,f,a,c=b+"\n"+Array(b.length+1).join("=")+"\n";for(a=b=e=f=0;a<d.length;a+=2)b++,d[a]===d[a+1]?e++:(f++,c+="\n- Fail (test "+b+"): Expected "+d[a+1]+", but got "+d[a]);c+="\nOf "+b+" tests, "+e+" passed and "+f+" failed.";g?g(c):console&&console.log&&console.log(c);return e==b};
