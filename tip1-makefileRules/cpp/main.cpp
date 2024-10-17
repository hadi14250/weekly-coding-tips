#include <iostream>

int main(int ac, char **av)
{
    int i = 0;
    while(++i < ac)
        std::cout << av[i] << std::endl;
}
