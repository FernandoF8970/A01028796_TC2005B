/*
Detect when the ball goes out of bounds
Fernando Adrián Fuentes Martínez - A01028796
10/04/2024
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PongGoal : MonoBehaviour
{
    [SerializeField] string side;

    //Variable to reference another script
    Manager manager;

    // Start is called before the first frame update
    void Start()
    {
        manager = GameObject.FindWithTag("GameController").GetComponent<Manager>(); 
    }

    //Detect when the ball goes out of bounds
    void OnCollisionEnter2D(Collision2D other)
    {
        manager.Score(side);
        Destroy(other.gameObject);
    }
}