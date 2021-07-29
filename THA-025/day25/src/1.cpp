#include <bits/stdc++.h>
#define ul unsigned long long int
#define ll long long int
#define pb push_back
#define mod 1000000007
using namespace std;

int main() {
     ll t;
    cin>>t;
    unordered_map<ll,ll> m;
    while(t--){
        ll n,i;
        cin>>n;
        for(i=0;i<n;i++){
            cin>>p;
            m[p]++;
            
        }
        for(auto i=m.begin();i!=m.end;i++){
            cout<<i->first<<" "<<i->second;
        }
        cout<<"\n";
        
    }
   return 0;
}
