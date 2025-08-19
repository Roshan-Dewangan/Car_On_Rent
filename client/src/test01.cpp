#include<bits/stdc++.h>
using namespace std;

set <char> FindBreaks(string s, int k){

        int arr[26] = {0};
        for(int i=0; i< s.length(); i++){
            arr[s[i]-'a']++;
        }
        set<char> lst;
        int c=0;
        while(c<26){
            cout<< c <<" "<< arr[c]<<endl;
            c++;
        }
        for(int i=0; i< 26; i++){
            if(arr[i] < k && arr[i] > 0){
                lst.insert(char('a'+ i));
            }
        }

        return lst;
    }

int longestSubstring(string s, int k) {
        if(k==1){
            return s.length();
        }
        if(k>s.length()){
            return 0;
        }

        set<char> lst = FindBreaks(s, k);
        

        if(lst.empty()){
            return s.length();
        }

        int l=0, r=s.length()-1, m;
        int left=0, right=0;
        for(int i=0; i<= r; i++){
            if(lst.find(s[i]) != lst.end()){
                if(i!=0){
                    left = longestSubstring( s.substr(l,i), k);
                    
                }

                if(right != r){
                    right = longestSubstring( s.substr(i+1, r), k);
                    
                } 
                
                break;
                
            }
        }

        if(left > right){
            return left;
        }
        return right;
    }



int main(){

    string s = "aaaaaaaaaaaabcdefghijklmnopqrstuvwzyz";

    int st =  longestSubstring(s, 3);
    cout<< "Hello "<<st;

    

    return 0;
}