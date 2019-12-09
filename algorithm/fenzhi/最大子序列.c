#include<stdio.h>

int maxSubArray(int* nums, int numsSize) 
{
    int i,j,max,temp;
    max = temp = 0;
    max = nums[0];
    //找出数组中最大值
    for(i=1;i<numsSize;i++)
    {
       if(nums[i]>max)
           max = nums[i];
    }
    printf("%d\n",max);
    //相加比较找最大值
    for(i=0;i<numsSize;i++)
    {//两两相加进行比较
       temp += nums[i];
       max =  temp<max ? max:temp;
       printf("%d,%d,%d ",temp,max,nums[i]);
       temp = temp< 0 ? 0:temp;
       printf("%d\n",temp);
    }
    return max;
}

int main()
{
    int sum,len;
    int nums[]={-2,1,-3,4,-1,2,1,-5,4};
    len = 9;
    sum = maxSubArray(nums, len);
    printf("%d\n",sum);
   return 0;
}
