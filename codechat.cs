using System;

class Program
{
    static void Main()
    {
        int health = 100;
        int score = 0;

        while (health > 0)
        {
            Console.WriteLine("Choose an action:");
            Console.WriteLine("1. Fight a monster");
            Console.WriteLine("2. Rest by the campfire");
            Console.WriteLine("3. Quit the game");

            if (int.TryParse(Console.ReadLine(), out int choice))
            {
                switch (choice)
                {
                    case 1:
                        Console.WriteLine("You fight the monster and lose 10 health.");
                        health -= 10;
                        score += 10;
                        break;
                    case 2:
                        Console.WriteLine("You rest by the campfire and regain 20 health.");
                        health += 20;
                        break;
                    case 3:
                        Console.WriteLine($"Thanks for playing! Your score: {score}");
                        return;
                    default:
                        Console.WriteLine("Invalid choice. Try again.");
                        break;
                }

                health -= 10;
                if (health <= 0)
                {
                    Console.WriteLine($"Game over. Your score: {score}");
                }
            }
            else
            {
                Console.WriteLine("Invalid input. Please enter a valid number.");
            }
        }
    }
}