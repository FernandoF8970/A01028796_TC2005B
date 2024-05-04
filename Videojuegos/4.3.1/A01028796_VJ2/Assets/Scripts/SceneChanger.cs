/* 
Script to change scenes 
Fernando Adrián Fuentes Martínez - A01028796
*/


using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SceneChanger : MonoBehaviour
{

    public static void GoTo(string sceneName)
    {
        //load the scene with the given name
        UnityEngine.SceneManagement.SceneManager.LoadScene(sceneName);
    }

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
