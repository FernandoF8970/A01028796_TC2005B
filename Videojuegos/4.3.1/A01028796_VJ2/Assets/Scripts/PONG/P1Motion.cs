/* 
Control the movements of a game paddle (P1 PONG)

Fernando Adrián Fuentes Martínez - A01028796
09/04/2024
*/


using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class P1Motion : MonoBehaviour
{
    [SerializeField] float speed;
    [SerializeField] Vector2 direction;
    [SerializeField] KeyCode positiveKey;
    [SerializeField] KeyCode negativeKey;
    [SerializeField] float limit;


    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(positiveKey) && transform.position.y < limit) {
            transform.Translate(direction * speed * Time.deltaTime);

        } else if (Input.GetKey(negativeKey) && transform.position.y > -limit) {
            transform.Translate(- direction * speed * Time.deltaTime);
        }
        
    }
}
